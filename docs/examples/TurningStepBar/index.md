<script setup>
import TurningStepsBar from '../../packages/lxy-step-bar/src/components/TurningStepsBar/index.vue'
</script>

# TurningStepsBar 转弯步骤条

根据长度自适应大小

## 基础用法

This is a .md using a custom component

<TurningStepsBar style="width:1000px" value="5" :list="[{
          status: '1',
          title: '步骤条1',
          description: '2021年7月7日',
        },
        {
          status: '2',
          title: '步骤条2',
          description: '2021年11月19日',
        },
        {
          status: '3',
          title: '步骤条3',
          description: '2021年12月31日2021年12月31日',
        },
        {
          status: '4',
          title: '步骤条4',
          description: '2021年12月31日',
        },
        {
          status: '5',
          title: '步骤条5',
          description: '2021年12月31日',
        },
        {
          status: '6',
          title: '步骤条6',
          description: '2021年12月31日',
        }]" />

## 插槽使用

This is a slot example, 请设置内容高度

<TurningStepsBar #default="current" value="5" :list="[{ status: '1', title: '步骤条1', description: '2021年7月7日', }, { status: '2', title: '步骤条2', description: '2021年11月19日', }, { status: '3', title: '步骤条3', description: '2021年12月31日', }, { status: '4', title: '步骤条4', description: '2021年12月31日', }, { status: '5', title: '步骤条5', description: '2021年12月31日', }, { status: '6', title: '步骤条6', description: '2021年12月31日', }, { status: '7', title: '步骤条7', description: '2021年12月31日', }, { status: '8', title: '步骤条8', description: '2021年12月31日', }, { status: '9', title: '步骤条9', description: '2021年12月31日', }, { status: '10', title: '步骤条10', description: '2021年12月31日', }, { status: '11', title: '步骤条11', description: '2021年12月31日', }, { status: '12', title: '步骤条12', description: '2021年12月31日', }, { status: '13', title: '步骤条13', description: '2021年12月31日', }, { status: '14', title: '步骤条14', description: '2021年12月31日', }]" > <div class="turning-steps-body" style="height:100px;"> <p>{{ current.item.status }}</p> <p>{{ current.item.title }}</p> <p>{{ current.item.description }}</p> </div> </TurningStepsBar>

<TurningStepsBar style="width:1000px" itemWidth="20%" #default="current" value="5" :list="[{ status: '1', title: '步骤条1', description: '2021年7月7日', }, { status: '2', title: '步骤条2', description: '2021年11月19日', }, { status: '3', title: '步骤条3', description: '2021年12月31日', }, { status: '4', title: '步骤条4', description: '2021年12月31日', }, { status: '5', title: '步骤条5', description: '2021年12月31日', }, { status: '6', title: '步骤条6', description: '2021年12月31日', }, { status: '7', title: '步骤条7', description: '2021年12月31日', }, { status: '8', title: '步骤条8', description: '2021年12月31日', }, { status: '9', title: '步骤条9', description: '2021年12月31日', }, { status: '10', title: '步骤条10', description: '2021年12月31日', }, { status: '11', title: '步骤条11', description: '2021年12月31日', }, { status: '12', title: '步骤条12', description: '2021年12月31日', }, { status: '13', title: '步骤条13', description: '2021年12月31日', }, { status: '14', title: '步骤条14', description: '2021年12月31日', }]" > <div class="turning-steps-body" style="height:100px;"> <p>{{ current.item.status }}</p> <p>{{ current.item.title }}</p> <p>{{ current.item.description }}</p> </div> </TurningStepsBar>

<details>
<summary>展开查看</summary>

```vue
<template>
  <TurningStepsBar #default="current" :value="5">
    <div class="turning-steps-body" style="height:100px;">
      <p>{{ current.item.status }}</p>
      <p>{{ current.item.title }}</p>
      <p>{{ current.item.description }}</p>
    </div>
  </TurningStepsBar>
</template>
```

</details>
