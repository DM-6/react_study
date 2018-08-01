// 手写react 将jsx转化为virtual dom
// 手写react 创建了一个createElement方法

const React = {     // 创建命名空间
    createElement
};

function createElement(tag, attrs, ...children){    // 创建结点 (标签，属性，子结点(不止一个或没有))
    return {
        tag, 
        attrs,
        children
    }
}

const ReactDOM = {   // 创建命名空间 reactdom  虚拟dom -> 真实dom
    render: (vnode, container) => {   // 虚拟结点 vnode
        return render(vnode, container);   // 挂载到container
    }
};

function render(vnode, container){
    console.log(vnode);
    if(typeof vnode === 'string'){
        const textNode = document.createTextNode(vnode);
        return container.appendChild(textNode, container);
    }
    if(vnode.attrs){
        Object.keys(vnode.attrs).forEach(key => {
            if(key === 'className') key = 'class';
            dom.setAttribute(key, vnode.attrs[key]);
        });
    }
    const dom = document.createElement(vnode.tag);   // 将虚拟结点中的tag拿出来
    vnode.children.forEach(child => render(child, dom));   // 递归  forEach遍历一下 拿到每个儿子
    return container.appendChild(dom);
    // render();    
}

const element = (
    <div>
        hello<span>world</span>
    </div>
);
// console.log(element);

ReactDOM.render(
    <h1>Hello, World!</h1>,
    document.getElementById('root')    // 挂载点的获取
);
