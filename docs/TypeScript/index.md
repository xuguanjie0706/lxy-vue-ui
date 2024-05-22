# Typescript

由浅入深再学一遍

```
pnpm i typescript
```

## typescipt playground

https://ts.nodejs.cn/play?filetype=js&useJavaScript=true

## 基本类型

- boolean(布尔)，仅有2个值false和true

```
const isDone:boolean = false
```

- number(数字) 和javascript一样typescript里面的所有数字类型都是浮点类型。

```
const decLiteral: number = 6          //10进制
const hexLiteral: number = 0xf00d     //16进制
const banaryLiteral: number = 0b1010  //2进制
const ortalLiteral: number = 0o744    //8进制
```

- string(字符串) 使用string 表示文本数据类型

```
let name:string= 'bob'
name = "smith"
```

- array(数组) 有2种方式可以定义数组

```
const list1:number[] = [1,2,3]      // 使用[]
const list2:Array<number> = [1,2,3] // 使用泛型
```

- object(对象) 可以直接使用object声明，也可以分子段声明

```
const good1:object={
  name:"fish",
  price:1
}
const good2:{name:string,price:number}={
  name:"fish2",
  price:2
}
```

- null(空) 对应的类型也是null

```
const foo:null = null
```

- undefined(未定义) 对应的类型也是未定义

```
const foo:undefined = undefined
```

- symbol(标志) ES6新引入的类型，表示独一无二的值

除此之外TypeScritpt 为了完善类型系统，来定义了以下基础类型。

- never(用不存在)

```
// 返回never函数必须存在无法到达的终点,抛出错误
function error(message:string):never{
  throw new Error(message)
}
// 死循环
function infiniteLoop():never{
  while(true){

  }
}
//一个类型不可能即使数字又是布尔值
type Never = number & boolean
```

- any(任意类型)

```
let notSure:any = 4
notSuture = "maybe a is instead"
notSuture = false
```

- void(没有任何类型) undefined 被赋值给类型为void的变量。当一个函数没有返回值时，其返回类型会被自动推断为void。

```
function foo():void{
  console.log("hello world")
}
const foo1:void = undefined
```

- enum(枚举) 具有名字的常量集合,防止开发人员提供无效的值。枚举分数字枚举和字符串枚举实现原理:反向映射。::: code-group

```ts [ts代码]
enum Month {
  Jan,
}
```

```js [js代码]
var Month;
(function (Month) {
  Month[(Month['Jan'] = 0)] = 'Jan';
})(Month || (Month = {}));
```

:::

- tuple(元组) 属于数组类型的一个变种，用来表示一个已知类型的数量和类型，元素的类型可以不同

```
let foo :[number,string]
foo = [1,'hello world'] // 正确
foo = ['hello world',1] // 错误
```

- T(泛型) 泛型支持未来的数据类型及做一些数据推断。泛型在实际应用中及其广泛。例如泛型函数，泛型类型等。你以及将它理解成类型变量

泛型函数：一个返回自身的函数，如果不用泛型必须指定出参和入参，灵活性差 ::: code-group

```一个返回自身类型的函数 [bad Case]
function identity(arg:number):number{
  return arg
}
```

```使用泛型返回自身类型的函数 [Good Case]
function identity<T>(arg:T):T{
  return arg
}
```

::: 泛型类型

```
type Person<T>={
  name:string,
  skill: T
}
```
