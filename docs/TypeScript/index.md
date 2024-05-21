# Typescript

```
pnpm i typescript
```

## typescipt playground

https://ts.nodejs.cn/play?filetype=js&useJavaScript=true

## 基本类型

## 枚举类型

具有名字的常量集合。枚举分数字枚举和字符串枚举实现原理:反向映射。::: code-group

```ts [ts代码]
enum Month {
  Jan,
}
```

```js [js代码]
var Month;
(function (Month) {
  Month[(Month['Jan'] = 0)] = 'Jan';
})(Month || (Month = {}));
```

:::
