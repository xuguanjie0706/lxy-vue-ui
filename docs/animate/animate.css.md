---
title: animate.css
# editLink: true
---

<script setup>
    import 'animate.css';
    import { onMounted ,ref} from 'vue';
     const list = ref(Array(4).fill(0).map((_,index)=>index) )
     const animateCSS = (element, animation, prefix = 'animate__') =>
            // We create a Promise and return it
            new Promise((resolve, reject) => {
                const animationName = `${prefix}${animation}`;
                const node = document.querySelector(element);

                node.classList.add(`${prefix}animated`, animationName);

                // When the animation ends, we clean the classes and resolve the Promise
                function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
                }

                node.addEventListener('animationend', handleAnimationEnd, {once: true});
            });
    async function  handleClick(){
        await animateCSS(".my-element1",'bounce')
        await animateCSS(".my-element2",'flash')
        await animateCSS(".my-element3",'pulse')
        await animateCSS(".my-element4",'backInUp')
        await animateCSS(".my-element5",'backOutDown')
    }
    function ADD(){
        list.value.push(list.value.length)
    }
    function POP(){
        list.value.pop()
    }
    onMounted(()=>{
        const element = document.querySelector('.my-element');
        console.log(element)
        element.addEventListener('animationend', (e) => {
            console.log(123,e)
        });
    })
    
</script>



<style>
.my-element{
display: inline-block;
  margin: 0 0.5rem;

  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}
</style>

# Animate.css

## 安装

```
pnpm add animate.css
```
## 引入
```
 import 'animate.css';
 <h1 class="animate__animated animate__bounce">An animated element</h1>
```
<h1 class="animate__animated animate__bounce">An animated element</h1>

原来真的如此简单

## 使用@keyframes
```
<h1 class="my-element">An animated custom element</h1>
.my-element{
  display: inline-block;
  margin: 0 0.5rem;
  animation: bounce; /* 动画名 */
  animation-duration: 2s; /* don't forget to set a duration! */
}
```

<h1 class="my-element">An animated custom element - my-element</h1>

## 使用自定义

```
/* 局部设置 */
.animate__animated.animate__bounce {
  --animate-duration: 2s;
}

/* 全局设置 */
:root {
  --animate-duration: 800ms;
  --animate-delay: 0.9s;
}
/* 通过js设置css变量属性 */
document.documentElement.style.setProperty('--animate-duration', '2s');
```

## 延迟classes
```
<div class="animate__animated animate__bounce animate__delay-2s">Example</div>
```
<div class="animate__animated animate__bounce animate__delay-2s">Example</div>

## Slow, slower, fast, and Faster classes
```
animate__slow	2s
animate__slower	3s
animate__fast	800ms
animate__faster	500ms
```
<div class="animate__animated animate__bounce animate__faster">Example</div>

## Repeating
```
animate__repeat-1	1
animate__repeat-2	2
animate__repeat-3	3
animate__infinite	infinite
```
<div class="animate__animated animate__bounce animate__repeat-2">Example</div>

## 与Javascript一起使用
你可以通过监听动画事件来监听
```
const element = document.querySelector('.my-element');
console.log(element)
element.addEventListener('animationend', (e) => {
    console.log(123,e)
});
```

## 进阶
你可以很轻松的对出队列动画
<el-button type="primary" @click="handleClick">开始动画</el-button>
<h1 class="my-element1">An animated custom element - my-element1</h1>
<h1 class="my-element2">An animated custom element - my-element2</h1>
<h1 class="my-element3">An animated custom element - my-element3</h1>
<h1 class="my-element4">An animated custom element - my-element4</h1>
<h1 class="my-element5">An animated custom element - my-element5</h1>

```
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});
```
```
await animateCSS(".my-element1",'bounce')
await animateCSS(".my-element2",'flash')
await animateCSS(".my-element3",'pulse')
await animateCSS(".my-element4",'backOutDown')
await animateCSS(".my-element5",'backInUp')
```

## 结合使用 transition-group
### 例子1
<button type="primary" @click="ADD">ADD</button><button type="success" @click="POP">POP</button>
<div style="display:flex">
    <transition-group enter-active-class="animate__animated animate__bounceOut" leave-active-class="animate__animated animate__hinge">
        <div style="padding:10px" class="item" v-for="item in list" :key="item">
            {{ item }}
        </div>
    </transition-group>
</div>


## 新学知识点
***
```
element.addEventListener('click', myClickHandler, { once: true });

```
addEventListener第三个参数可以为对象值
- capture：布尔值，表示监听器是否在捕获阶段执行。
- once：布尔值，表示监听器是否仅执行一次。
- passive：布尔值，表示监听器不会调用 preventDefault()
***
