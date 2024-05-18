<script setup>
Function.prototype.myApply = function(context){
    if( typeof this !== "function"){
        return console.error("type error");
    }
    let args = [...arguments][1]
    context = context || window;
    const sym = Symbol('fn');
    context[sym]= this
    const result = context[sym](...args)
    delete context[sym]
    return result
} 

function sum(a,b){
    return a+b
}

console.log(sum.myApply(null,["3","2"]))

// apply(null,123)
</script>

# Apply

apply 是函数对象的一个方法，用于调用一个函数，并指定函数内部的 this 上下文以及函数的参数列表 **function.apply(thisArg,[argsArray])**

## 将类数组对象转换为真正的数组：

```
function sum(a,b){
    return a+b
}
sum.apply(null,[2,3])
```

## 在继承中调用父类的构造函数

```
function Parent(name){
    this.name = name
}

function Child(name,age){
    Parent.apply(this,[name])
    this.age = age
}

const child = new Child('Alice', 5);
```

## 动态改变函数的上下文

```
const person1 = {name:'Alice'}
const person2 = {name:'Jom'}
function sayHi  (){
    console.log(`Hello ${this.name}`)
}

sayHi.apply(person1)


```

## 手写代码

apply和call 最大的区别就是args `[...arguments][1]`和`[...arguments].slice(1)`

```
Function.prototype.myApply = function(context){
    if( typeof this !== "function"){
        return console.error("type error");
    }
    let args = [...arguments][1]
    context = context || window;
    const sym = Symbol('fn');
    context[sym]= this
    const result = context[sym](...args)
    delete context[sym]
    return result
}

```

{{a}}
