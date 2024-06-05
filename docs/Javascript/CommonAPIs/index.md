# 常用函数

## 获取URL的搜索参数

```
const getQueryByName = (name)=>{
    const query = new URLSearchParams(location.search)
    return decodeURIComponent(query.get(name))
}
```

## 平滑滚动至页面顶部

```javascript
const scrollTop = (speed = 10) => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(() => scrollTop(speed));
    window.scrollTo(0, c - c / speed);
  }
};

scrollTop();
```

## 设置千分符

```javascript
const formatMoney = (money) => {
  return money.toLocaleString();
};
```
