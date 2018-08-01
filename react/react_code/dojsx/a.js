'use strict';

// 手写react 将jsx转化为virtual dom
// 手写react 创建了一个createElement方法

var React = { // 创建命名空间
    createElement: createElement
};

function createElement(tag, attrs) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    // 创建结点 (标签，属性，子结点(不止一个或没有))
    return {
        tag: tag,
        attrs: attrs,
        children: children
    };
}

var ReactDOM = { // 创建命名空间 reactdom  虚拟dom -> 真实dom
    render: function render(vnode, container) {
        // 虚拟结点 vnode
        return _render(vnode, container); // 挂载到container
    }
};

function _render(vnode, container) {
    console.log(vnode);
    if (typeof vnode === 'string') {
        var textNode = document.createTextNode(vnode);
        return container.appendChild(textNode, container);
    }
    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(function (key) {
            if (key === 'className') key = 'class';
            dom.setAttribute(key, vnode.attrs[key]);
        });
    }
    var dom = document.createElement(vnode.tag); // 将虚拟结点中的tag拿出来
    vnode.children.forEach(function (child) {
        return _render(child, dom);
    }); // 递归  forEach遍历一下 拿到每个儿子
    return container.appendChild(dom);
    // render();    
}

var element = React.createElement(
    'div',
    null,
    'hello',
    React.createElement(
        'span',
        null,
        'world'
    )
);
// console.log(element);

ReactDOM.render(React.createElement(
    'h1',
    null,
    'Hello, World!'
), document.getElementById('root') // 挂载点的获取
);
