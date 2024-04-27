<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

<script setup>
  import StepsBar from '../../../packages/LxyStepBar/src/components/StepsBar/index.vue'
</script>

## 基本使用

This is a simple example

<StepsBar ></StepsBar>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <StepsBar></StepsBar>
  </div>
</template>
```

</details>

## 插槽使用

This is a slot example

<StepsBar value="1">
 <template #default="current"> <div class="turning-steps-body"> <p> {{current.item.title}}</p> <p> {{current.item.description}}</p>

 </div>
</template> 
</StepsBar>

<details>

  <summary>展开查看</summary>

```vue
<template>
  <div>
    <StepsBar value="1">
      <template #default="current">
        <div class="turning-steps-body">
          <p>{{ current.item.title }}</p>
          <p>{{ current.item.description }}</p>
        </div>
      </template>
    </StepsBar>
  </div>
</template>
```

</details>

## More docs
