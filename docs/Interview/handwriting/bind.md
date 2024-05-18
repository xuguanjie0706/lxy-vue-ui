<script setup>
// Function.prototype.mybind = function(context){
//     if(typeof this !== 'function'){
//         console.log("type is not function")
//     }
//     const args = [...argument].slice(1)
//     fn = this
//     return function Fn(){
//        return fn.apply(context,args.concat(arguments))
//     }
// }
</script>

# Bind

bind 函数的实现步骤：判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。保存当前函数的引用，获取其余传入参数值。创建一个函数返回函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。

```
Function.prototype.mybind = function(context){
    if(typeof this !== 'function'){
        console.log("type is not function")
    }
    const args = [...argument].slice(1)
    fn = this
    return function Fn(){
       return fn.apply(context,args.concat(arguments))
    }
}
```
