<template>
  <ul class="lxy-steps">
    <li :class="item.className" v-for="(item, index) in infoList" :key="index">
      <slot :item="item">
        <div class="turning-steps-body">
          <p>{{ item.title }}</p>
          <p>{{ item.description }}</p>
        </div>
      </slot>
    </li>
  </ul>
</template>

<script>
import classnames from 'classnames';
export default {
  name: 'StepsBar',
  computed: {
    infoList() {
      return this.list.map((item) => {
        const _item = { ...item };
        const className = classnames({
          active: +item.status === +this.value,
        });
        _item.className = className;
        return _item;
      });
    },
  },
  props: {
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

.lxy-steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // flex-direction: column;
  padding: 0;
  margin: 0;
  counter-reset: order;
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
}
.lxy-steps li + li {
  margin-top: 0;
}
/* 步骤项 */
.lxy-steps > li {
  flex: auto;
  display: inline-flex;
  align-items: center;
  counter-increment: order;
  color: var(--active-steps-color);
}
.lxy-steps > li:last-child {
  flex: none;
}
/* 步骤编号(带圈数字) */
.lxy-steps > li::before {
  content: counter(order);
  flex-shrink: 0;
  width: 1.4em;
  line-height: 1.4em;
  margin-right: 0.5em;
  text-align: center;
  border-radius: 50%;
  border: 1px solid;
}

.lxy-steps > li.active::before {
  content: counter(order);
  // content: "\e62d";
  flex-shrink: 0;
  width: 1.4em;
  line-height: 1.4em;
  margin-right: 0.5em;
  text-align: center;
  border-radius: 50%;
  border: 1px solid;
}

/* 步骤项引导线 */
.lxy-steps > li:not(:last-child)::after {
  content: '';
  flex: 1;
  margin: 0 1em;
  border-bottom: 1px solid;
  opacity: 0.6;
}

/* 步骤状态 */
.lxy-steps > .active {
  color: var(--active-steps-color);
}
.lxy-steps > .active::before {
  color: #fff;
  background: var(--active-steps-color);
  border-color: var(--active-steps-color);
}
.lxy-steps > .active::after,
.lxy-steps > .active ~ li {
  color: var(--normal-steps-color);
}

.turning-steps-body {
  display: flex;
  flex-direction: column;
}
</style>
