# \<script setup \>

`<script setup>` 是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐

## 基本语法

```
<script setup>
console.log('hello script setup')
</script>
```

## 响应式

```
import { ref,toRefs } from 'vue'

const count = ref(0)
cosnt props = toRefs(props)
```

## 使用组件

```
<script setup>
import MyComponent from './MyComponent.vue'
</script>

<template>
  <MyComponent />
</template>
```

### 动态组件

```
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
  <component :is="Foo" />
  <component :is="someCondition ? Foo : Bar" />
</template>
```

### 递归组件

一个单文件组件可以通过它的文件名被其自己所引用。例如：名为 FooBar.vue 的组件可以在其模板中用 <FooBar/> 引用它自己。

### 命名空间组件

```
<script setup>
import * as Form from './form-components'
</script>

<template>
  <Form.Input>
    <Form.Label>label</Form.Label>
  </Form.Input>
</template>
```

## 使用自定义指令

```
<script setup>
const vMyDirective = {
  beforeMount: (el) => {
    // 在元素上做些操作
  }
}
</script>
<template>
  <h1 v-my-directive>This is a Heading</h1>
</template>
```

## defineProps() 和 defineEmits()

```
<script setup>
const props = defineProps({
  foo: String
})

const emit = defineEmits(['change', 'delete'])
</script>
```

## defineModel() 3.4+

fdafda

```
const model = defineModel()
// 或者：声明带选项的 "modelValue" prop
const model = defineModel({ type: String });

model.value = "hello"

// 声明 "count" prop，由父组件通过 v-model:count 使用
const count = defineModel("count")
// 或者：声明带选项的 "count" prop
const count = defineModel("count", { type: Number, default: 0 })

function inc() {
  // 在被修改时，触发 "update:count" 事件
  count.value++
}

```

### 修饰符

```
const [modelValue, modelModifiers] = defineModel({
  // get() 省略了，因为这里不需要它
  set(value) {
    // 如果使用了 .trim 修饰符，则返回裁剪过后的值
    if (modelModifiers.trim) {
      return value.trim()
    }
    // 否则，原样返回
    return value
  }
})
```

# defineExpose()

使用 `<script setup>` 的组件是默认关闭的——即通过模板引用或者 $parent 链获取到的组件的公开实例，不会暴露任何在 `<script setup>` 中声明的绑定。

可以通过 defineExpose 编译器宏来显式指定在 `<script setup>` 组件中要暴露出去的属性：

**值得注意的是通过getCurrentInstance 获取的实例在expose中，并不再proxy属性中**

```
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
```

# defineOptions()

这个宏可以用来直接在 `<script setup>` 中声明组件选项，而不必使用单独的块：

```
<script setup>
defineOptions({
  inheritAttrs: false,
  customOptions: {
    /* ... */
  }
})
</script>
```
