# Sass进阶篇
[sass学习地址](https://www.w3school.com.cn/sass/sass_functions_string.asp)
## if语句
Sass可以根据条件判断给出特定的样式
```
.box {
	@if 1+1 == 2 {
		color: red;
	} @else if 1+1 == 3 {
		color: blud;
	} @else {
		color: pink;
	}
}
```

## for循环
Sass也支持for循环，有两种语法。

::: code-group

```@for $index from 开始值 through 结束值 [包含结束值]
@for $i from 1 through 5 {
	.col-#{$i} {
		width: 50px * $i;
	}
}
```

```@for $index from 开始值 to 结束值 [不包含结束值]
@for $i from 1 to 5 {
	.col-#{$i} {
		width: 50px * $i;
	}
}
```

:::

## each循环
遍历一个列表，然后从列表中取出对应值。

```
$icons: success fail warning;
@each $i in $icons {
	.icon-#{$i} {
		background-image: url(../images/icons/#{$i}.png);
	}
}
```

## while循环
```
$index: 6;
@while $index> 0 {
    .box-#{$index} {
        width: 5px * $index;
    }

    $index: $index - 2;
}
```

## 用户自定义函数
```
$index: 6;
@function get-color($key) {
	@if $key > 5 {
		@return #000;
	} @else {
		@return #fff;
	}
}
```

## @at-root
@ at-root指令是一个嵌套规则的集合，它能够在文档的根节点创建样式块

## 字符串函数
|函数| 描述 | 例子  |
|:--|--|--:|
|str-slice |从字符串中提取字符；从 start 开始到 end 结束，并返回切片。| str-slice("Hello world!", 2, 5) result:ello|
|str-length(string) |返回字符串的长度（以字符计）。|str-length("Hello world!") result:12|
|str-index |返回子字符串在字符串中第一次出现的索引。| str-index("Hello world!", "H") result 1|
|a |b| c|




## 省函数方法

|函数| 描述 | 例子  |
|:--|--|--:|
|inspect($value) |返回由Sass表示的$value| inspect(12) Result:12|

