<template>
  <ul class="tuning-steps" ref="tuning-steps">
    <li
      @click="handleClick(item, $event)"
      :style="`flex-basis:${itemw};order:${item.order}`"
      :class="[
        item.className,
        item.status === currentValue ? 'active' : '',
        !!item.status ? '' : 'empty',
      ]"
      v-for="(item, index) in listInfo"
      :key="index"
    >
      <slot :item="item">
        <div class="turning-steps-body" style="height: 200px">
          <p>{{ item.title }}</p>
          <p>{{ item.description }}</p>
        </div>
      </slot>
    </li>
  </ul>
</template>

<script>
import classnames from 'classnames';
import { group } from './utils';
export default {
  name: 'TurningStepsBar',
  computed: {
    itemw() {
      return isNaN(Number(this.itemWidth))
        ? this.itemWidth
        : this.itemWidth + 'px';
    },
  },
  data() {
    return {
      listInfo: [],
      currentValue: null,
    };
  },
  methods: {
    handleClick(item, e) {
      if (e.target.className.includes('empty')) {
        return;
      }
      this.currentValue = item.status;
      this.$emit('cellClick', item);
    },
  },
  async mounted() {
    this.currentValue = this.value;
    let count = 0;
    const iw = this.itemWidth.replace(/(%|px)/, '');
    if (this.itemWidth.includes('%')) {
      count = Math.floor(100 / +iw);
    } else {
      const elRoom = this.$refs['tuning-steps'];
      count = Math.floor((elRoom.clientWidth - 100) / iw);
    }
    let _list = this.list;
    if (this.list.length % (count * 2) > count) {
      _list = [
        ...this.list,
        ...Array(count - (this.list.length % count)).fill({}),
      ];
    }

    const targetList = _list.map((item, index) => {
      const _t = { ...item };
      if ((index + 1) % count === 0) {
        if ((index + 1) % (2 * count) === 0) {
          _t._left = true;
        } else {
          _t._right = true;
        }
      }
      return _t;
    });
    const _ls = group(targetList, count);

    this.listInfo = _ls
      .map((item, index) =>
        index % 2
          ? item
              .reverse()
              .map((it, idx) => {
                it.order = index * count + idx;
                it.even = true;
                return it;
              })
              .reverse()
          : item.map((it, idx) => {
              it.order = index * count + idx;
              return it;
            }),
      )
      .flat(1)
      .map((item) => {
        const className = classnames({
          'cell-left': item._left,
          'cell-right': item._right,
          'cell-even': item.even,
          noline: (item.order + 1) % count === 0,
        });
        item.className = className;
        return item;
      });
  },
  props: {
    itemWidth: {
      type: String,
      default: '30%',
    },
    list: {
      type: Array,
      default: () => [
        {
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
          description: '2021年12月31日',
        },
      ],
    },
    value: {
      type: String,
    },
  },
};
</script>

<style lang="less">
:root {
  --normal-steps-color: #666;
  --active-steps-color: #06e;
}

.tuning-steps {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 50px !important;
  margin: 0;
  counter-reset: order;
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
}

.tuning-steps li + li {
  margin-top: 0;
}
/* 步骤项 */
.tuning-steps > li {
  cursor: pointer;
  flex: auto;
  display: inline-flex;
  align-items: center;
  counter-increment: order;
  color: var(--active-steps-color);
  flex-grow: 0;
  position: relative;
}
.tuning-steps > li:last-child {
  flex: none;
}

/* 步骤项引导线 */
.tuning-steps > li:not(.empty):not(.online):not(:last-child)::after {
  content: '';
  flex: 1;
  margin: 0 1em;
  border-bottom: 1px solid;
  opacity: 0.6;
}
li.cell-left:last-child::after {
  content: '';
  flex: 1;
  margin: 0 1em;
  border-bottom: 1px solid;
  opacity: 0.6;
}

li.cell-left:not(:last-child):not(.empty)::before {
  content: '';
  border-left: 1px solid;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-radius: 10px 0px 0px 10px;
  width: 20px;
  height: 100%;
  position: absolute;
  top: 50%;
  left: -30px;
}
.cell-left.active::before,
.cell-right.active::before {
  border-color: var(--normal-steps-color) !important;
}

li.cell-right:not(:last-child)::before {
  content: '';
  border-right: 1px solid;
  border-top: 1px solid;
  border-bottom: 1px solid;
  //  border-color: var(--normal-steps-color);
  border-radius: 0px 10px 10px 0px;
  width: 20px;
  height: 100%;
  position: absolute;
  top: 50%;
  right: 0px;
}

.tuning-steps > .active::after,
.tuning-steps > .active ~ li {
  color: var(--normal-steps-color);
}

/* 步骤状态 */
.tuning-steps > .active,
.tuning-steps > .cell-even.active::after {
  color: var(--active-steps-color);
}

.turning-steps-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.online::after {
  content: '';
  display: none;
}

.noline::after {
  display: none;
}

li.noline {
  flex-shrink: 123;
}

.cell-left.active::after {
  color: var(--active-steps-color);
}
.empty::after {
  display: none;
}
</style>
