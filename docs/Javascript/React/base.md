# React 基础

## 快速上手

react 声明组件有2种方式。分为:类组件和函数组件

## 类组件

类组件使用class 定义,

```
class WelCome extends React.Compnent<Props>{
    // 组件被挂载之前，调用构造函数
    constructor(){

    }
    // 组件的状态，也可写在constructor中
    state = {
        count:1
    }
    // 在render方法之前被调用，并且在初始化挂载后更新都会被调用。它应返回一个对象来更新state，如果返回null则不更新任何内容
    getDerivedStateFromProps(){

    }
    // 每次渲染都会执行。但是当`shouldComponentUpdate`返回false时，不对调用
    render (){
        return <h1>Hello,{this.props.name}</h1>
    }
    // 该方法会在组件挂载后，正实插入节点后调用
    componentDidMount(){

    }
    // 默认state每次发生变化，组件都会重新渲染，此生命周期用来优化性能
    shouldComponentUpdate(){

    }
    // 该方法会在最近一次渲染输出前调用。它用来获取更改前的DOM信息，如滚动位置
    getSnapshotBeforeUpdate(){

    }
    // 首次渲染不会执行此方法，该方法会在组件被更新后调用。
    componentDidUpdate(){

    }
    // 在组件销毁前调用。一般用于清理必要的操作，如定时器
    componentWillUnmount(){

    }
    //用于后代组件抛出错误后调用
    getDerivedStateFromError(){

    }
}
```

### state 组件内状态管理

使用setState方法进行更新，this.setState(obj,callback)

```
this.setState({
    count:this.state.count+1
},()=>console.log('更新完成'))
```

### 提问：this.setState是异步的还是同步的？上面的例子像是有一个异步的回调。

遗留问题

## 函数组件

React Hook

- useState: 对应类组件中的state和setState,用于状态管理
- useEffect: 用于执行副作用代码，如模拟生命周期，绑定事件
- useMemo

## 路由控制

React Router 是一套完整的React路由解决方案，它拥有简单的Api与强大的功能。
