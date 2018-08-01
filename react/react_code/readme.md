1. 虚拟DOM ? VNode Virtual DOM  
mvvm 封装了dom层  
dom 太消耗性能  
vnode + diff算法 来解决

react 的 jsx语法（背后就是virtual dom）  
用js对象描述html结构

JSX 背后隐含着VNode的真相  
```
React.createElement(
    h1 第一个参数 封装成 ele = document.createElement() 再把这个结点挂载到页面上  
    attributes 第二个参数 返回第一个参数的结点ele.setAttribute(key, val)  
    children 第三个参数 分支：1 文本结点textnode  
                             2 node 递归一下
)
```

虚拟DOM 描述 JSON
```
<h1 className="title">标题<span>副标题</span></h1>

VNode = {
    tag: "h1",
    atts: {
        class: "title"
    },
    children: [
        '标题',
        递归 VNode...(实现DOM树的嵌套)
    ]
}
```
