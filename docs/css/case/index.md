# 经典案例

记录遇到的经典案例及思考

## iframe 内容不整齐，内容变形

取巧方案,将iframe父容器快速放大,然后使用`transform: scale(.5)`

```
transform: scale(.5);
transform-origin: top left;
```
