# IntersectionObserver

Intersection Observer API 为开发者提供了一种可以异步监听目标元素与其祖先或者视窗（viewport）交叉状态的手段。主要场景**懒加载和无限滚动**

## 语法

```
const observer = new IntersectionObserver(callback, options)
observer.observe(target)
```

## callback 参数

```
callback([IntersetionObserverEntry],options)
```

### IntersectionObserverEntry对象

- time 返回一个记录从IntersectionObserver开始实例化的时间到交叉状态发生改变的时间的时间戳对比时间
- rootBounds 根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null
- boundingClientRect 目标元素的矩形信息
- isIntersecting 目标元素当前是否可见 Boolean值 可见为true
- intersectionRect 目标元素与视口（或root根元素）的交叉区域的信息
- intersectionRatio 标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全交叉时为1，完全不交叉时小于等于0
- target 被观察的目标元素，是一个 DOM 节点对象
- isVisible trackVisibility开启后生效,被遮挡或者透明时为false

### options

- delay 延迟时间,单位毫秒
- root 默认是窗口,可以设置具体dom
- rootMargin 默认"0px 0px 0px 0px" 可以扩大窗口大小
- scrollMargin 默认"0px 0px 0px 0px" 可以减少滚动距离target的交叉轴的距离
- thresholds 跟踪阈值
- trackVisibility 轨迹可见性 需要伴随delay

## 快速实现懒加载

```
const io = new IntersectionObserver(callback);
let imgs = document.querySelectorAll("[data-src]"); // 将图片的真实url设置为data-src src属性为占位图 元素可见时候替换src
function callback(entries) {
    entries.forEach((item) => {
        // 遍历entries数组
        if (item.isIntersecting) {
        // // 当前元素可见
        item.target.src = item.target.dataset.src; // 替换src
        io.unobserve(item.target); // 停止观察当前元素 避免不可见时候再次调用callback函数
        }
    });
}

// io.observe接受一个DOM元素，添加多个监听 使用forEach
imgs.forEach((item) => {
    io.observe(item);
});
```
