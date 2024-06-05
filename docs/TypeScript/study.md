# 学习记录

## 使用定义函数类型

::: details

type GreetingFunction = (name:string) => string type OptionalGreetingFunction = (name?:string) => string type Person = { greeting(name:string):void, eat:(name:string)=>void }

interface GreetingFunctionInterface{ (name:string):string }

interface OptionalGreetingFunctionInterface{ (name:string)?:string }

interface PersonInterface { greeting(name:string):void, eat:(name:string)=>void }

:::
