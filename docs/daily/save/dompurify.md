<script setup>
    import DOMPurify from "dompurify"
    DOMPurify.sanitize('<img src=x onerror=alert(1)//>');
</script>

# dompurify

一个仅限于DOM的，超快速的，用于HTML，MathML和SVG的XSS消毒剂。domprify使用一个安全的默认值，但是提供了很多可配置性和钩子。

### 一个简单的使用

```
import DOMPurify from "dompurify"
DOMPurify.sanitize('<img src=x onerror=alert(1)//>');
console.log(DOMPurify.sanitize('<img src=x onerror=alert(1)//>'))
```

### 富文本里面的svg攻击片段

```
const svg = `<svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve">
<path id="a" d="M0,0"/>
<g id="b"><use xlink:href="#a"/><use xlink:href="#a"/><use xlink:href="#a"/><use xlink:href="#a"/><use xlink:href="#a"/><use xlink:href="#a"/><use xlink:href="#a"/><use xlink:href="#a"/><use xlink:href="#a"/><use xlink:href="#a"/></g>
<g id="c"><use xlink:href="#b"/><use xlink:href="#b"/><use xlink:href="#b"/><use xlink:href="#b"/><use xlink:href="#b"/><use xlink:href="#b"/><use xlink:href="#b"/><use xlink:href="#b"/><use xlink:href="#b"/><use xlink:href="#b"/></g>
<g id="d"><use xlink:href="#c"/><use xlink:href="#c"/><use xlink:href="#c"/><use xlink:href="#c"/><use xlink:href="#c"/><use xlink:href="#c"/><use xlink:href="#c"/><use xlink:href="#c"/><use xlink:href="#c"/><use xlink:href="#c"/></g>
<g id="e"><use xlink:href="#d"/><use xlink:href="#d"/><use xlink:href="#d"/><use xlink:href="#d"/><use xlink:href="#d"/><use xlink:href="#d"/><use xlink:href="#d"/><use xlink:href="#d"/><use xlink:href="#d"/><use xlink:href="#d"/></g>
<g id="f"><use xlink:href="#e"/><use xlink:href="#e"/><use xlink:href="#e"/><use xlink:href="#e"/><use xlink:href="#e"/><use xlink:href="#e"/><use xlink:href="#e"/><use xlink:href="#e"/><use xlink:href="#e"/><use xlink:href="#e"/></g>
<g id="g"><use xlink:href="#f"/><use xlink:href="#f"/><use xlink:href="#f"/><use xlink:href="#f"/><use xlink:href="#f"/><use xlink:href="#f"/><use xlink:href="#f"/><use xlink:href="#f"/><use xlink:href="#f"/><use xlink:href="#f"/></g>
<g id="h"><use xlink:href="#g"/><use xlink:href="#g"/><use xlink:href="#g"/><use xlink:href="#g"/><use xlink:href="#g"/><use xlink:href="#g"/><use xlink:href="#g"/><use xlink:href="#g"/><use xlink:href="#g"/><use xlink:href="#g"/></g>
<g id="i"><use xlink:href="#h"/><use xlink:href="#h"/><use xlink:href="#h"/><use xlink:href="#h"/><use xlink:href="#h"/><use xlink:href="#h"/><use xlink:href="#h"/><use xlink:href="#h"/><use xlink:href="#h"/><use xlink:href="#h"/></g>
<g id="j"><use xlink:href="#i"/><use xlink:href="#i"/><use xlink:href="#i"/><use xlink:href="#i"/><use xlink:href="#i"/><use xlink:href="#i"/><use xlink:href="#i"/><use xlink:href="#i"/><use xlink:href="#i"/><use xlink:href="#i"/></g>
</svg>`
DOMPurify.sanitize(svg);

```

## Hooks

domprify允许您通过将一个或多个带有DOMPurify.addHook方法的函数附加到以下一个钩子上来扩充它的功能：

- beforeSanitizeElements
- uponSanitizeElement（没有's'-为每个元素调用）
- afterSanitizeElements
- beforeSanitizeAttributes
- uponSanitizeAttribute
- afterSanitizeAttributes
- beforeSanitizeShadowDOM
- uponSanitizeShadowNode
- afterSanitizeShadowDOM

当需要时，它将当前处理的DOM节点传递给回调函数，其中包含已验证的节点和属性数据以及domprify配置。查看MentalJS钩子演示，看看如何更好地使用API。

```
DOMPurify.addHook('beforeSanitizeElements', function (
  currentNode,
  hookEvent,
  config
) {
  // Do something with the current node and return it
  // You can also mutate hookEvent (i.e. set hookEvent.forceKeepAttr = true)
  return currentNode;
});
```
