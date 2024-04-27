<style>
    
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

<script setup>
    import axios from "axios"
    import { onMounted ,ref ,getCurrentInstance} from 'vue';
    import { data1 } from "../../mock/index.js"
    import S2View from '../../packages/lxy-s2-view/src/components/S2View/index.vue'
    const dataSource1 = ref(data1)
    const hierarchyType = ref("grid")
    const meta1 = ref([
        {
        field: 'number',
        name: '数量'
        },
        {
        field: 'province',
        name: '省份'
        },
        {
        field: 'city',
        name: '城市'
        },
        {
        field: 'type',
        name: '类别'
        },
        {
        field: 'sub_type',
        name: '子类别'
        }
    ])
    onMounted(()=>{
        axios.get("/data/list").then(res => {
            // console.table(res.data.data,222);
            dataSource1.value = res.data
            console.log(dataSource1,22)
          }).catch(error => {
            console.log(error);
          })
         const instance = getCurrentInstance()
         console.log(instance,"in")
          
    })

</script>

# 大数据表格

## 构成

透视表由五部分组成，分别是行头、列头、角头、数据单元格、框架 如下图所示：

![alt text](image.png)

## 基础用法

This is a simple example

<div class="example">
<el-select v-model="hierarchyType" style="width: 100px" placeholder="请选择模式"> 
    <el-option value="tree" label="树状模式">树状模式</el-option>
    <el-option value="grid" label="平铺模式">平铺模式 </el-option>
</el-select>

<s2-view ref="s2" :dataSource="dataSource1"  :hierarchyType="hierarchyType" :meta="meta1"></s2-view>

</div>
