import Mock from 'mockjs';

const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
    },
  ],
});

// 输出结果
// JSON.stringify(data, null, 4);
const template = {
  describe: '标准交叉表数据。',
  fields: {
    rows: ['province', 'city'],
    columns: ['type', 'sub_type'],
    values: ['number'],
    valueInCols: true,
  },
  data: [
    {
      number: 7789,
      province: '浙江省',
      city: '杭州市',
      type: '家具',
      sub_type: '桌子',
    },
    {
      number: 2367,
      province: '浙江省',
      city: '绍兴市',
      type: '家具',
      sub_type: '桌子',
    },
    {
      number: 3877,
      province: '浙江省',
      city: '宁波市',
      type: '家具',
      sub_type: '桌子',
    },
    {
      number: 4342,
      province: '浙江省',
      city: '舟山市',
      type: '家具',
      sub_type: '桌子',
    },
    {
      number: 5343,
      province: '浙江省',
      city: '杭州市',
      type: '家具',
      sub_type: '沙发',
    },
    {
      number: 632,
      province: '浙江省',
      city: '绍兴市',
      type: '家具',
      sub_type: '沙发',
    },
    {
      number: 7234,
      province: '浙江省',
      city: '宁波市',
      type: '家具',
      sub_type: '沙发',
    },
    {
      number: 834,
      province: '浙江省',
      city: '舟山市',
      type: '家具',
      sub_type: '沙发',
    },
    {
      number: 945,
      province: '浙江省',
      city: '杭州市',
      type: '办公用品',
      sub_type: '笔',
    },
    {
      number: 1304,
      province: '浙江省',
      city: '绍兴市',
      type: '办公用品',
      sub_type: '笔',
    },
    {
      number: 1145,
      province: '浙江省',
      city: '宁波市',
      type: '办公用品',
      sub_type: '笔',
    },
    {
      number: 1432,
      province: '浙江省',
      city: '舟山市',
      type: '办公用品',
      sub_type: '笔',
    },
    {
      number: 1343,
      province: '浙江省',
      city: '杭州市',
      type: '办公用品',
      sub_type: '纸张',
    },
    {
      number: 1354,
      province: '浙江省',
      city: '绍兴市',
      type: '办公用品',
      sub_type: '纸张',
    },
    {
      number: 1523,
      province: '浙江省',
      city: '宁波市',
      type: '办公用品',
      sub_type: '纸张',
    },
    {
      number: 1634,
      province: '浙江省',
      city: '舟山市',
      type: '办公用品',
      sub_type: '纸张',
    },
    {
      number: 1723,
      province: '四川省',
      city: '成都市',
      type: '家具',
      sub_type: '桌子',
    },
    {
      number: 1822,
      province: '四川省',
      city: '绵阳市',
      type: '家具',
      sub_type: '桌子',
    },
    {
      number: 1943,
      province: '四川省',
      city: '南充市',
      type: '家具',
      sub_type: '桌子',
    },
    {
      number: 2330,
      province: '四川省',
      city: '乐山市',
      type: '家具',
      sub_type: '桌子',
    },
    {
      number: 2451,
      province: '四川省',
      city: '成都市',
      type: '家具',
      sub_type: '沙发',
    },
    {
      number: 2244,
      province: '四川省',
      city: '绵阳市',
      type: '家具',
      sub_type: '沙发',
    },
    {
      number: 2333,
      province: '四川省',
      city: '南充市',
      type: '家具',
      sub_type: '沙发',
    },
    {
      number: 2445,
      province: '四川省',
      city: '乐山市',
      type: '家具',
      sub_type: '沙发',
    },
    {
      number: 2335,
      province: '四川省',
      city: '成都市',
      type: '办公用品',
      sub_type: '笔',
    },
    {
      number: 245,
      province: '四川省',
      city: '绵阳市',
      type: '办公用品',
      sub_type: '笔',
    },
    {
      number: 2457,
      province: '四川省',
      city: '南充市',
      type: '办公用品',
      sub_type: '笔',
    },
    {
      number: 2458,
      province: '四川省',
      city: '乐山市',
      type: '办公用品',
      sub_type: '笔',
    },
    {
      number: 4004,
      province: '四川省',
      city: '成都市',
      type: '办公用品',
      sub_type: '纸张',
    },
    {
      number: 3077,
      province: '四川省',
      city: '绵阳市',
      type: '办公用品',
      sub_type: '纸张',
    },
    {
      number: 3551,
      province: '四川省',
      city: '南充市',
      type: '办公用品',
      sub_type: '纸张',
    },
    {
      number: 352,
      province: '四川省',
      city: '乐山市',
      type: '办公用品',
      sub_type: '纸张',
    },
  ],
  totalData: [
    {
      number: 26193,
      type: '家具',
      sub_type: '桌子',
    },
    {
      number: 49709,
      type: '家具',
    },
    {
      number: 23516,
      type: '家具',
      sub_type: '沙发',
    },
    {
      number: 29159,
      type: '办公用品',
    },
    {
      number: 12321,
      type: '办公用品',
      sub_type: '笔',
    },
    {
      number: 16838,
      type: '办公用品',
      sub_type: '纸张',
    },
    {
      number: 18375,
      province: '浙江省',
      type: '家具',
      sub_type: '桌子',
    },
    {
      number: 14043,
      province: '浙江省',
      type: '家具',
      sub_type: '沙发',
    },
    {
      number: 4826,
      province: '浙江省',
      type: '办公用品',
      sub_type: '笔',
    },
    {
      number: 5854,
      province: '浙江省',
      type: '办公用品',
      sub_type: '纸张',
    },
    {
      number: 7818,
      province: '四川省',
      type: '家具',
      sub_type: '桌子',
    },
    {
      number: 9473,
      province: '四川省',
      type: '家具',
      sub_type: '沙发',
    },
    {
      number: 7495,
      province: '四川省',
      type: '办公用品',
      sub_type: '笔',
    },
    {
      number: 10984,
      province: '四川省',
      type: '办公用品',
      sub_type: '纸张',
    },
    {
      number: 13132,
      province: '浙江省',
      city: '杭州市',
      type: '家具',
    },
    {
      number: 2288,
      province: '浙江省',
      city: '杭州市',
      type: '办公用品',
    },
    {
      number: 15420,
      province: '浙江省',
      city: '杭州市',
    },
    {
      number: 2999,
      province: '浙江省',
      city: '绍兴市',
      type: '家具',
    },
    {
      number: 2658,
      province: '浙江省',
      city: '绍兴市',
      type: '办公用品',
    },
    {
      number: 5657,
      province: '浙江省',
      city: '绍兴市',
    },
    {
      number: 11111,
      province: '浙江省',
      city: '宁波市',
      type: '家具',
    },
    {
      number: 2668,
      province: '浙江省',
      city: '宁波市',
      type: '办公用品',
    },
    {
      number: 13779,
      province: '浙江省',
      city: '宁波市',
    },
    {
      number: 5176,
      province: '浙江省',
      city: '舟山市',
      type: '家具',
    },
    {
      number: 3066,
      province: '浙江省',
      city: '舟山市',
      type: '办公用品',
    },
    {
      number: 8242,
      province: '浙江省',
      city: '舟山市',
    },
    {
      number: 4174,
      province: '四川省',
      city: '成都市',
      type: '家具',
    },
    {
      number: 6339,
      province: '四川省',
      city: '成都市',
      type: '办公用品',
    },
    {
      number: 10513,
      province: '四川省',
      city: '成都市',
    },
    {
      number: 4066,
      province: '四川省',
      city: '绵阳市',
      type: '家具',
    },
    {
      number: 3322,
      province: '四川省',
      city: '绵阳市',
      type: '办公用品',
    },
    {
      number: 7388,
      province: '四川省',
      city: '绵阳市',
    },
    {
      number: 4276,
      province: '四川省',
      city: '南充市',
      type: '家具',
    },
    {
      number: 6008,
      province: '四川省',
      city: '南充市',
      type: '办公用品',
    },
    {
      number: 10284,
      province: '四川省',
      city: '南充市',
    },
    {
      number: 4775,
      province: '四川省',
      city: '乐山市',
      type: '家具',
    },
    {
      number: 2810,
      province: '四川省',
      city: '乐山市',
      type: '办公用品',
    },
    {
      number: 7585,
      province: '四川省',
      city: '乐山市',
    },
    {
      number: 32418,
      province: '浙江省',
      type: '家具',
    },
    {
      number: 10680,
      province: '浙江省',
      type: '办公用品',
    },
    {
      number: 43098,
      province: '浙江省',
    },
    {
      number: 17291,
      province: '四川省',
      type: '家具',
    },
    {
      number: 18479,
      province: '四川省',
      type: '办公用品',
    },
    {
      number: 35770,
      province: '四川省',
    },
    {
      number: 78868,
    },
  ],
};
// Mock.setup({
//   timeout: '1200-1600'
// })
export const data1 = Mock.mock(template);
const provinceCityData = {
  北京: ['北京市'],
  上海: ['上海市'],
  广东: ['广州市', '深圳市', '佛山市', '佛门市'], // 开个玩笑，广东其实没有佛门和佛山
  河北: ['石家庄市', '邯郸市', '保定市'],
  浙江: ['宁波', '杭州', '台州', '温州', '绍兴', '湖州'],
  // ... 其他省市数据
};
const useType = {
  家具: ['桌子', '沙发', '椅子', '床'],
  办公用品: ['笔', '纸张', '橡皮'],
};
export const userData = Mock.mock('/data/list', 'get', {
  describe: '标准交叉表数据。',
  fields: {
    rows: ['province', 'city'],
    // rows: ['province', 'city', 'type', 'sub_type'],
    columns: ['type', 'sub_type'],
    values: ['number'],
    valueInCols: true,
  },
  'data|1000': [
    {
      number: '@integer(200,3000)',
      'province|1': Object.keys(provinceCityData),
      img: '@image()',
      'city|1': function () {
        const n = Math.floor(
          provinceCityData[this.province].length * Math.random(),
        );
        return provinceCityData[this.province][n];
      },
      'type|1': Object.keys(useType),
      sub_type: function () {
        const n = Math.floor(useType[this.type].length * Math.random());
        return useType[this.type][n];
      },
    },
  ],
});
