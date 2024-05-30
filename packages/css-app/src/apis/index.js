const person = {
  name: 'bob',
};
console.log(person);

/* 访问器描述符 */
/**
 * configurable： 该属性表示是否可以通过delete删除，是否能够修改属性的特征或者访问器属性。默认值是false；
 * enumerable: 属性述否可枚举。 即 可否通过for..in 访问属性；默认值为 false
 * writable： 该属性的值是否可写。 默认值为false。
 *  */
/* 简单理解，默认不能删除，不能修改，不能枚举 */

Object.defineProperty(person, 'age', {
  value: 24,
});

console.log(person);
/* 此时设置年龄会报错 */
try {
  person.age = 25;
} catch (error) {
  console.log(`年龄不能随意改`);
}

Object.defineProperty(person, 'gender', {
  value: '男',
  writable: true,
});

/* 他做了手术 */
person.gender = '中性';
console.log(person, `bob 做了手术,改变了性别`);

/* bob 希望别人知道自己的爱好 */
Object.defineProperty(person, 'hobbies', {
  value: ['reading', 'traveling', 'photography'],
  enumerable: true,
});
console.log(person, `bob希望别人可以知道他的爱好`);
Object.values(person).forEach((item) => console.log(item));

Object.defineProperty(person, 'job', {
  value: 'coding',
  configurable: true,
});
console.log(person, `bob得到了工作`);

try {
  delete person.age;
} catch (error) {
  console.log(`age is cannot delete`);
}
delete person.job;

console.log(person, `bob失去了工作`);

/* 数据描述符 和访问器描述符是不能同时是使用的 */
const person1 = {
  name: 'jack',
  _age: null, // 私有变量
  age: 99,
};

/* 访问器描述符 */
Object.defineProperty(person1, 'age', {
  configurable: true,
  enumerable: false,
  set(value) {
    console.log('set', value);
    this._age = value;
  },
  get() {
    console.log('get');
    return this._age;
  },
});
person1.age = 12;
console.log(person1);

Object.values(person1).forEach((item) => console.log(item));

let data = {
  text: 'Hello, world!',
};

// 使用 Object.defineProperty 实现 getter 和 setter
Object.defineProperty(data, 'text', {
  enumerable: true,
  configurable: true,
  get: function () {
    return this._text; // 使用内部变量存储值
  },
  set: function (value) {
    this._text = value; // 更新内部变量的值
    updateView(); // 数据变化时更新视图
  },
});
function updateView() {
  document.getElementById('myMessage').innerText = data.text;
}
document.getElementById('myInput')?.addEventListener('input', function (e) {
  data.text = e.target.value; // 视图变化时更新数据
});
