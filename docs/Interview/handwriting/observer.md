<script setup>
// 定义一个观察者类
class Observer {
    constructor(name){
        this.name = name
    }

    //观察者需要实现的通知接口
    update(data){
        console.log(`更新方法,必须要自己具体的实现`)
    }
}

class Squirrel extends Observer{
    update(message){
        console.log(`松鼠${this.name}接到通知:${message},要觅食啦`)
    }
}

class Bear extends Observer{
    update(message){
        console.log(`小熊${this.name}接到通知:${message},要找对象啦`)
    }
}

class Bird extends Observer{
    update(message){
        console.log(`小鸟${this.name}接到通知:${message},要繁殖啦`)
    }
}
// 定义一个主题类
class Subject {
    constructor(name){
        this.observers = []
        this.name = name
    }

    // 添加观察者
    attach(observer){
        if(typeof observer.update === 'function'){
            this.observers.push(observer)
            console.log(`${observer.name} 进来了`)
        }
    }

    // 移除观察者
    detach(observer){
        this.observers = this.observers.filter(obs=>obs!==observer)
         console.log(`${observer.name} 离开啦`)
    }

    // 通知观察者
    notify(data){
        this.observers.forEach(observer=>{
            observer.update(data)
        })
    }
}


// 使用案例

// 猎人发布一个悬赏主题
// const subject = new Subject('活动:发现鹿群')

// // 松鼠
// const observer1 = new Squirrel("松鼠1")
// // 小熊
// const observer2 = new Bear("小熊1")
// // 小鸟
// const observer3 = new Bird("松鼠1")


// // 狐狸 小鸟 松鼠 进入了活动中心
// subject.attach(observer1)
// subject.attach(observer2)
// subject.attach(observer3)

// 猎人说

// subject.notify("活动一要开始啦")

// 所有人收到通知都做了相应的措施


</script>

# 观察者模式

观察者模式（也被称为发布-订阅模式或事件监听模式）是一种行为设计模式，它允许对象（称为观察者）订阅另一个对象（称为主题或可观察者）的状态变化。当主题的状态改变时，它会自动通知所有订阅的观察者。这种模式在JavaScript中非常常见，因为浏览器事件（如点击、滚动等）和许多库（如React、Vue等）都使用了这种模式。

## 故事

森林里的果实成熟

在一个遥远的森林里，生活着各种各样的动物。这片森林充满了生机，每个季节都有它独特的魅力。春天，万物复苏；夏天，阳光普照；秋天，果实累累；冬天，白雪皑皑。

秋天的到来

随着秋天的到来，森林里的树木开始换上了金色的外衣，而树上的果实也渐渐变得饱满起来。这是森林里动物们一年中最期待的时刻，因为果实成熟意味着食物充足，可以安心地度过冬天。

森林的呼唤

森林，作为这片生态系统的核心，它有一个神奇的能力——能够感知到季节的变换和果实的成熟。每当果实成熟时，森林都会向它的朋友们发出一个特殊的信号，告诉他们可以来享用这美味的果实了。

小松鼠的忙碌

小松鼠是这片森林里最勤劳的动物之一。它们早早地就做好了准备，等待着森林的信号。当森林发出“果实已经成熟，快来享用吧！”的信号时，小松鼠们立刻兴奋起来。它们迅速地从树洞里跑出来，开始了忙碌的收集果实的工作。小松鼠们一边收集果实，一边开心地想：“这个冬天我们不用担心食物了！”

棕熊的期待

棕熊是这片森林里最大的动物，它也在等待森林的信号。棕熊知道，每当果实成熟时，它就可以大吃一顿，为即将到来的冬眠储备能量。当森林发出信号时，棕熊也迫不及待地走出了它的洞穴，准备享受这难得的美食盛宴。

森林的平静

随着时间的推移，森林里的果实被动物们吃得差不多了。棕熊也吃饱了肚子，开始为冬眠做准备。它决定离开这片森林，去寻找一个安静的地方冬眠。在离开之前，棕熊向森林道别：“谢谢你，森林，让我度过了一个美好的秋天。”

新一轮的循环

随着冬天的到来，森林逐渐变得安静起来。但是，它并没有停止工作。它在默默地积累能量，为下一年的春天做准备。当春天来临时，森林将再次焕发生机，迎接新的生命和新的挑战。

这就是森林和它的朋友们之间的故事。它们相互依存、相互支持，共同创造了一个和谐美好的生态环境。而森林的神奇能力——能够感知到季节的变换和果实的成熟，并向它的朋友们发出信号的能力，正是这个生态系统得以维持平衡的关键所在。

## 代码

```
// 定义一个观察者类
class Observer {
    constructor(name){
        this.name = name
    }

    //观察者需要实现的通知接口
    update(data){
        console.log(`更新方法,必须要自己具体的实现`)
    }
}

class Squirrel extends Observer{
    update(message){
        console.log(`松鼠${this.name}接到通知:${message},要觅食啦`)
    }
}

class Bear extends Observer{
    update(message){
        console.log(`小熊${this.name}接到通知:${message},要找对象啦`)
    }
}

class Bird extends Observer{
    update(message){
        console.log(`小鸟${this.name}接到通知:${message},要繁殖啦`)
    }
}
// 定义一个主题类
class Subject {
    constructor(name){
        this.observers = []
        this.name = name
    }

    // 添加观察者
    attach(observer){
        if(typeof observer.update === 'function'){
            this.observers.push(observer)
            console.log(`${observer.name} 进来了`)
        }
    }

    // 移除观察者
    detach(observer){
        this.observers = this.observers.filter(obs=>obs!==observer)
         console.log(`${observer.name} 离开啦`)
    }

    // 通知观察者
    notify(data){
        this.observers.forEach(observer=>{
            observer.update(data)
        })
    }
}


// 使用案例

// 森林
const subject = new Subject('森林1')

// 松鼠
const observer1 = new Squirrel("松鼠1")
// 小熊
const observer2 = new Bear("小熊1")
// 小鸟
const observer3 = new Bird("松鼠1")


// 狐狸 小鸟 松鼠 进入了 森林1
subject.attach(observer1)
subject.attach(observer2)
subject.attach(observer3)

// 猎人说

subject.notify("春天来了")

// 所有人收到通知都做了相应的措施
```
