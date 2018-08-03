function createElement(tag, attrs, ...children){   // crreateElement 返回一个虚拟DOM
    // console.log(tag, attrs, children);
    attrs = attrs || {};
    return{
        tag,
        attrs,
        children,
        key: attrs.key || null     // 标注唯一性
    }
}

export default createElement;