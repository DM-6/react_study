1. jsx(react-jsx-plugin) -> vnode(createElement) -> DOM(render)

2. Component(render的第三种方式，react-jsx  vnode.tag->function(函数)(插件做) Counter) -> 标签化组件 
   -> Counter(extends继承) -> Component类 -> render(jsx)方法 -> reactDOM.render() (虚拟DOM->真实DOM)  

3. 响应式编程setState() 为了达到DOM的更新，将整个DOM片段都替换掉了。  
   > a. 新生成整个的组件DOM树，重新挂载 100行DOM HTML  
   > b. 只将setState关联的那一小段DOM，在原来的DOM基础上做一下修改，将修改反映到DOM上，1行 n:1 html树，DOM开销是一般计算开销的100-1000倍  
   >- 重绘 replaceChild  
   >- 重排

### React DOM diff 算法  
需求：减少DOM操作  

setState 对应的DOM部分  
setState 返回一个新的vnode（virtial DOM） -> 跟旧的DOM对比  
将新的内存（虚拟）DOM 跟 旧的DOM 对比？  都是树状结构（一棵树） 采用一个算法就可以比较出差异点，在相差的地方，进行真实DOM的操作

