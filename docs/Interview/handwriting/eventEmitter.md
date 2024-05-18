<script setup>

class EventEmitter {
    constructor (){
        this.events={}
    }

    on(eventName,callback){
        if(!this.events[eventName]){
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }

    emit(eventName,...args){
        if(this.events[eventName]){
            this.events[eventName].forEach(callback=>{
                callback.call(this,...args)
            })
        }
    }
    off(eventName,callback){
        if(this.events[eventName]){
           this.events[eventName] =  this.events[eventName].filter((cb)=>cb!==callback)
        }
    }
}

// 创建一个消息传递系统
const emitter = new EventEmitter()

// 猎人1 订阅 鹿群在哪里的任务 (不同的函数代表猎人名称)
function hunter1(area){
    console.log(`猎人1 鹿群在 ${area}`)
}
emitter.on("Deer",hunter1)

// 猎人2 订阅 鹿群在哪里的任务 (不同的函数代表猎人名称)
function hunter2(area){
    console.log(`猎人2 鹿群在 ${area}`)
}

emitter.on("Deer",hunter2)



// 小鸟 发现 鹿群 在消息传递系统发布消息
emitter.emit("Deer",'东边')
// 狐狸 发现 鹿群 在消息传递系统发布消息
emitter.emit("Deer","西边")

// 猎人1 取消订阅 鹿群在哪里的任务 
emitter.off('Deer', hunter1); 

// 松鼠 发现 鹿群 在消息传递系统发布消息
emitter.emit("Deer","北边") //只有猎人才能收到消息


</script>

# 发布订阅

发布订阅模式（Publish-Subscribe Pattern）是一种常见的消息传递模式，用于在多个对象或组件之间建立松散的耦合关系。在这种模式中，发送者（发布者）发送消息（事件），而不直接发送给特定的接收者（订阅者）。接收者则订阅他们感兴趣的消息，当消息被发布时，所有订阅了该消息的接收者都会收到通知。

## 故事

### 故事背景

在森林里，有一个猎人经常需要追踪和狩猎各种动物。但是，由于森林面积广阔，猎人无法独自追踪所有感兴趣的动物。幸运的是，森林里有许多其他生物，比如小鸟、松鼠和狐狸，它们经常观察到动物的活动，并愿意帮助猎人传递信息。

### 角色定义

猎人：发布者（Publisher），他对动物的行踪感兴趣，并希望获取关于动物的信息。小鸟、松鼠、狐狸：订阅者（Subscribers），它们各自观察着森林中不同区域的动物活动，并愿意将这些信息传递给猎人。消息传递系统：森林中的“消息传递系统”就是发布者模式的消息代理（Broker），它负责接收订阅者的注册信息，并在有消息发布时通知所有相关的订阅者。

### 故事流程

1. 猎人发布订阅请求：猎人告诉森林中的“消息传递系统”，他对“鹿群”的行踪特别感兴趣，如果有任何关于鹿群的消息，他希望能第一时间得知。
2. 订阅者注册：小鸟、松鼠和狐狸分别表示它们可以观察到森林不同区域的动物活动。小鸟说自己经常在高空飞翔，能看到远处的鹿群；松鼠则说自己在树上能观察到地面上的动静；狐狸则表示自己有敏锐的嗅觉，能闻到鹿群的气味。它们都向“消息传递系统”注册，表示愿意将观察到的鹿群信息传递给猎人。
3. 消息发布：有一天，小鸟在空中看到远处的鹿群正在迁移。它立即将这个消息发送给“消息传递系统”。
4. 消息传递：“消息传递系统”收到小鸟的消息后，迅速通知所有注册了“鹿群”信息的订阅者（在这个例子中是松鼠和狐狸）。但是，由于松鼠和狐狸当天并没有观察到鹿群，所以它们没有额外的信息传递给猎人。
5. 猎人接收消息：“消息传递系统”最后将小鸟观察到的鹿群信息传递给猎人。猎人得知鹿群正在迁移的消息后，立即准备追踪和狩猎。

## 代码

```
class EventEmitter {
    constructor (){
        this.events={}
    }
    // 订阅事件
    on(eventName,callback){
        if(!this.events[eventName]){
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }
    // 发布事件
    emit(eventName,...args){
        if(this.events[eventName]){
            this.events[eventName].forEach(callback=>{
                callback.call(this,...args)
            })
        }
    }
    // 取消事件
    off(eventName,callback){
        if(this.events[eventName]){
           this.events[eventName] =  this.events[eventName].filter((cb)=>cb!==callback)
        }
    }
}

// 创建一个消息传递系统
const emitter = new EventEmitter()

// 猎人1 订阅 鹿群在哪里的任务 (不同的函数代表猎人名称)
function hunter1(area){
    console.log(`猎人1 鹿群在 ${area}`)
}
emitter.on("Deer",hunter1)

// 猎人2 订阅 鹿群在哪里的任务 (不同的函数代表猎人名称)
function hunter2(area){
    console.log(`猎人2 鹿群在 ${area}`)
}

emitter.on("Deer",hunter2)

// 小鸟 发现 鹿群 在消息传递系统发布消息
emitter.emit("Deer",'东边')
// 狐狸 发现 鹿群 在消息传递系统发布消息
emitter.emit("Deer","西边")

// 猎人1 取消订阅 鹿群在哪里的任务
emitter.off('Deer', hunter1);

// 松鼠 发现 鹿群 在消息传递系统发布消息
emitter.emit("Deer","北边") //只有猎人才能收到消息
```
