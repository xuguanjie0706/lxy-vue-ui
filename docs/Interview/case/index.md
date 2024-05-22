<script setup>
function repeat(fn,num,delay){
    let n =0
    return async (...args)=>{
        while(n<num){
            fn(...args)
            await new Promise(resolve=>setTimeout(resolve,delay))
            n++
        }
    }
}
var repeatFunc=repeat(console.log,4,3000)
// repeatFunc('hellow world');
</script>

# 经典案例

## 案例一

var repeatFunc=repeat(console.log,4,3000) repeatFunc('hellow world'); //每个3秒打印1次hellow world,打印四次

```
function repeat(fn,num,delay){
    let n =0
    return async (...args)=>{
        while(n<num){
            fn(...args)
            await new Promise(resolve=>setTimeout(resolve,delay))
            n++
        }
    }
}
```
