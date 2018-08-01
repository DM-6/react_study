import { setAttribute } from './dom';

function _render (vnode) {
    // console.log(vnode);
    if (typeof vnode === 'string') {
      const textNode = document.createTextNode(vnode);
      return textNode
    }

    if(typeof vnode.tag === 'function'){
      // 在jsx标签<Counter/> 普通标签就会来到_render 不是普通 function Component类（new component） 实例化 生成周期 render方法 
      // console.log(vnode);
      const component = createComponent(vnode.tag, vnode.attrs);
      setComponentProps(component, vnode.attrs);
      return component.base;
    }

    const dom = document.createElement(vnode.tag);
    if (vnode.attrs) {
      Object.keys(vnode.attrs).forEach(key => {
        const value = vnode.attrs[key];
        // 不是简单的setAttribute 而是 onClick className {obj}
        setAttribute(dom, key, value);
      });
    }
    vnode.children.forEach(child =>  render(child, dom));
    return dom;
  }

function setComponentProps(component, props){
  renderComponent(component);
}

export function renderComponent(component){
  let base;
  const renderer = component.render();
  base = _render(renderer);  // 复用render方法
  component.base = base;
}

function createComponent(component, props){   // component名字 props传递的参数
  let inst;   // 一个实例  返回一个组件的实例
  if(component.prototype && component.prototype.render){
    inst = new component(props);
  }
  return inst;
}

export function render(vnode, container) {
    return container.appendChild(_render(vnode))
}
