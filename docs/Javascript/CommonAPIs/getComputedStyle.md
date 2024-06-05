# getComputedStyle

用于获取元素当前应用的所有 CSS 属性的最终值

## 语法

```javascript
window.getComputedStyle(element, [pseudoElt]);
```

- `element`：需要获取样式的元素。
- `pseudoElt（可选）`：指定要匹配的伪元素的字符串。对于常规元素，此参数应省略或设为 null。

## 与 element.style 的区别

- `getComputedStyle` 返回的是元素的最终样式，包括从所有样式表中继承的样式。
- `element.style` 只返回元素的内联样式（即在 HTML 元素上直接定义的样式）
