# 经典使用场景

## 这是一段Element3的代码

```
import { h, render,ComponentInstance,VNode} from "vue"
const MOUNT_COMPONENT_REF = 'el_component'
const COMPONENT_CONTAINER_SYMBOL = Symbol('el_component_container')
export function createComponent(Component,props,children?) {
    const vnode = h(Component,{...props,ref:MOUNT_COMPONENT_REF},children)
    const container = document.createElement('div')
    vnode[COMPONENT_CONTAINER_SYMBOL] = container
    render(vnode,container)
    return vnode.component
}
```
