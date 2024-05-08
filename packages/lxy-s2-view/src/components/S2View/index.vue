<template>
  <div id="container" />
</template>
<script>
import { S2Event, PivotSheet, TableSheet } from '@antv/s2';
import dataJson from '../../data';
export default {
  name: 's2-view',
  data() {
    return {
      s2: null,
    };
  },
  props: {
    dataSource: {
      type: Object,
      default: () => {},
    },
    hierarchyType: {
      type: String,
      default: 'grid',
    },
    meta: {
      type: Array,
      default: () => [],
    },
    layoutWidthType: {
      type: String,
      default: 'colAdaptive',
    },
  },
  mounted() {
    if (this.dataSource) {
      this.bootstrap();
    }
    setTimeout(() => {
      this.s2.setThemeCfg({ name: 'colorful' });
      // this.s2.render(false);
    }, 1000);
  },
  watch: {
    hierarchyType: {
      handler(value) {
        this.s2.destroy();
        this.bootstrap();
      },
    },
    dataSource: {
      handler(value) {
        console.log(value, 22);
        this.s2.destroy();
        this.bootstrap();
      },
      deep: true,
    },
  },
  methods: {
    async bootstrap() {
      console.log(this.dataSource);
      const s2Options = {
        width: 600,
        height: 480,
        hierarchyType: this.hierarchyType,
        showDefaultHeaderActionIcon: true,
        interaction: {
          copy: { enable: true },
          withFormat: true,
          withHeader: true,
        },
        // frozenFirstRow:false,
        // showSeriesNumber:true,
        // 显示序号
        // seriesNumber: {
        //   enable: true,
        //   自定义序号列文本, 默认 "序号"
        //   text: '自定义序号标题',
        //},
        style: {
          layoutWidthType: 'colAdaptive',
          // showTreeLeafNodeAlignDot:true,
          colCfg: {
            hideMeasureColumn: true,
          },
          cellCfg: {
            width: 200,
            // height: 100
          },
        },
        totals: {
          row: {
            showSubTotals: true,
            showGrandTotals: true,
            // reverseLayout: true,
          },
        },
        interaction: {
          selectedCellsSpotlight: false,
          hoverHighlight: false,
        },
        frozen: {
          // 默认冻结行头, 行头和数值区域都会展示滚动条
          // rowHeader: false,
          // 冻结行头时, 行头宽度占表格的 1/2, 支持动态调整 (0 - 1)
          // rowHeader: 0.2,
        },
      };
      const s2DataConfig = {
        ...this.dataSource,
        meta: this.meta,
      };
      const container = document.getElementById('container');
      const s2 = new PivotSheet(container, s2DataConfig, s2Options);
      this.s2 = s2;
      //  s2.setTheme({
      //   rowCell: {
      //     cell: {
      //       backgroundColor: "red"
      //     }
      //   }
      // });
      await s2.render();

      // await this.s2.setOptions({...this.s2.options, hierarchyType: "tree"},false)
    },
  },
};
</script>
