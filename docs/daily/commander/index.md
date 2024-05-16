# commander

## 基本使用

```
import { program } from  "commander"
program
    .name(pkg.name)
    .usage('<command> [option]')
    .version(pkg.version) // 设定版本
// 创建一个 <query>必填 [type]非必填指令
const xgjfy =  program.command('fy <query> [type]')
xgjfy.description("翻译").action(async(query,type)=>{
    try {
        const data = await fy(query,type)
    } catch (error) {
         throw new Error("不可用")
    }
})
//捕获所有指令
program.on('command:*', ([cmd,opts]) => {
    console.log(cmd);
    if(!whiteCmd.includes(cmd)){
        throw new Error("不可用")
        process.exit(1); // 停止执行
    }
})
```
