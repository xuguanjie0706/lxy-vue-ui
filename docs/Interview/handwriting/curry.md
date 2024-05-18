<script setup>
// function curry(fn,...args){

//     if(args.length>=fn.length){
//         return fn(...args)
//     }
//     return function(){
//       let _args = [...args,...arguments]  
//       return curry.call(this,fn,..._args)
//     }
// }
// const sum =(a,b,c)=>a+b+c
// const curry1 = curry(sum,1,2)

// console.log(curry1(3,4))
// console.log(curry1(9))


// function currying(fn){
//     let args = []
//     return function temp(...newArgs){
//         if(newArgs.length){
//             args = args.concat(newArgs)
//             return temp
//         }else{
//             let res = fn.apply(this,args)
//             args=[]
//             return res
//         }
//     }
// }

// function add (...arr){
//   return arr.reduce((x,y)=>x+y)
// }
// const temp = currying(add)
// console.log('currying',temp(1)(2)(3)())
// console.log('currying',temp(1)(2,3)())
</script>

# 柯里化

## 简化柯里化代码

```
var sum2 = x => y => z => {
  return x + y + z
}

var sum3 = x => y => z => x + y + z

```

## 手写代码

函数的长度代码参数的长度

```
function curry(fn,...args){
    if(args.length>=fn.length){
        return fn(...args)
    }
    return function(){
      let _args = [...args,...arguments]
      return curry.call(this,fn,..._args)
    }
}

const sum = (a,b,c)=>a+b+c
const curry1 = curry(sum,1,2)

console.log(curry1(3,4))  // 6
console.log(curry1(9))    // 12
```

## 实现参数不固定的写法 实现 addCurry(1,2,3) = 6

```
function currying(fn){
    let args = []
    return function temp(...newArgs){
        if(newArgs.length){
            args = args.concat(newArgs)
            return temp
        }else{
            let res = fn.apply(this,args)
            args=[]
            return res
        }
    }
}

function add (...arr){
  return arr.reduce((x,y)=>x+y)
}
const addCurry = currying(add)
console.log('currying',addCurry(1)(2,3)())
```
