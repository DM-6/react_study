// import createElement from "../react/create-element";
import { setAttribute } from './dom.js';
import Component from '../react/component.js';

/**
* 将虚拟DOM 变成真实DOM
* @params vnode 虚拟DOM
* @return 返回DOM
*/

function _render (vnode){
    // console.log(vnode);
    // return document.createTextNode('render');
    // 1、递归 将结点转成dom，子结点递归，出口就是文本结点
    // 2、结点类型 三种： 文本结点 return createTextNode() 
                    //  标签结点 createElement attr children设置（递归_render） 
                    //  Component render(return jsx)  再调用render()方法
    if(vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';

    if(typeof vnode === 'number'){
        console.log(vnode);
        vnode = String(vnode);
    }

    if(typeof vnode === 'string'){
        let textNode = document.createTextNode(vnode);
        return textNode;
    }

    // <Counter/> 不是正常标签 vnode.tag = function Counter(){}
    if(typeof vnode.tag === 'function'){
        // console.log(vnode);
        // return document.createTextNode('component');
        const component = createComponent(vnode.tag, vnode.attrs);
        setComponentProps (component, vnode.attrs);
        return component.base;      // 向外返回结点
    }

    const dom = document.createElement(vnode.tag);
    if(vnode.attrs){
        Object.keys(vnode.attrs).forEach(key => {
            const value = vnode.attrs[key];
            // dom.setAttribute(key, value);
            setAttribute(dom, key, value);
        })
    }

    if(vnode.children){
        vnode.children.forEach(child => render(child, dom));
    }

    return dom;
}

function setComponentProps(component, props){
    component.props = props;
    renderComponent(component);
}

// 将component里的jsx转为DOM 它还会在setState时调用
export function renderComponent(component){
    let base;    // jsx对应的DOM
    const renderer = component.render();     // 调用render方法
    base = _render(renderer);   
    if(component.base && component.base.parentNode){    // 非第一次渲染组件
        component.base.parentNode.replaceChild(base, component.base)
    }
    component.base = base;
    base._component = component;
}

function createComponent(component, props){
    let inst;
    if(component.prototype && component.prototype.render){
        inst = new component(props);   // 代表任何一个组件
    } else{
        inst = new Component(props);    // 没有构建组件时将Component拿出来
        inst.constructor = component;   // 把构造函数指给component
        inst.render = function(){
            return this.constructor(props);
        }
    }
    return inst;
}

export function render(vnode, container){
    // console.log(vnode, container);
    return container.appendChild(_render(vnode));
}