# React 介绍

React是用于构建用户界面的JavaScript库，起源于FaceBook。React在页面渲染更新上具有很好的表现，主要原因引入了虚拟节点（Virrual Dom）。通通俗的话来说就是一个JSON描述浏览器真实节点，通过规则递归出真实的dom元素。

## 学习路径

- [React基础](./base.md)

## 案例

### 先来看一段代码

```
<div>
<span >Hello</span>
<span id="name">Tom Jerry</span>
</div>
```

### 虚拟节点树

```
{
   tag:"div",
   children:[
        {
            tag:"span",
            children:[
                "Hello"
            ]
        },
        {
            tag:"span",
            props:{
                id:"name"
            },
            children:[
                "Tom Jerry"
            ]
        }
    ]
}
```

### React 写法

```
const El = React.createElement(
    "div",
    null,
    React.createElement(
        "span",
        null,
        "Hello!"
    ),
    React.createElement(
        "span",
        { id: 'name' },
        "Tom Jerry!"
    ),
)
```

### jsx 写法

```
 cosnt El = ()=>(<div>
    <span>Hello!</span>
    <span id="name">Tom Jerry!</span>
 </div>)
 ReactDOM.render(El,document.getElementById("app"))
```

相信已经对react有所了解,是不是也挺简单
