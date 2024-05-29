<script setup>

const person ={
    name:"jack",
    sex:"男",
}
let name = "jerry"
Object.defineProperty(person,"age",{
    value:21,
    writable: false,
})

// person.age = 22



Object.defineProperty(person,"name",{
    value:"bob", // 设置属性默认值
    // writable:true,
    // enumerable: true,
    // configurable: true, //如果为 true，则属性可以被删除和修改
    // get(){
    //     console.log("执行了get")
    //     // return this.name
    // },
    // set(value){
    //     console.log("执行了set",value)
    //     // name = value
    // }
})
// console.log(obj,"new")
// document.addEventSl
</script>
<input />
<span ></span>

# defineProperty

为了更好的理解，创建一个对象

```
const person ={
    name:"jack",
    sex:"男",
}
```

## 语法

```
Object.defineProperty(obj, prop, descriptor)
```

- obj:要定义属性的对象。
- prop:一个字符串或 Symbol，指定了要定义或修改的属性键。
- descriptor:要定义或修改的属性的描述符。

## defineProperty定义属性

```
// 定义一个属性,属性从5无到有
Object.defineProperty(person,"age",{
    value:21
})
// 修改一个属性
Object.defineProperty(person,"name",{
   value:"bob",
})
// 变量不可修改
Object.defineProperty(person,"name",{
   value: "bob",
   writable: false,
})

```

## defineProperty参数解析

- value:设置值，默认undefined
- writable:是否可操作属性值
- configurable:是否可修改配置属性
- enumerable:是否可枚举的属性
