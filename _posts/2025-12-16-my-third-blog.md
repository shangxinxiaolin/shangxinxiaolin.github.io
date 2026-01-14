---
layout:     post                      # 使用的布局（不需要改）
title:      日概要                    # 标题
subtitle:   今日                      # 副标题
date:       2025-12-16 10:00:00 +0800 # 时间（修正语法）
author:     XL                        # 作者
header-img: img/post-bg-universe.jpg  # 这篇文章标题背景图片
catalog:    true                      # 是否归档
category:   study                     # 分类（tech/life/study/other）
tags:                                 # 标签
    - 生活
    - 大一
---
## 12.16

12.16

忽然发觉自己已经好久没有更新这个blog了，确实是最近干的事情也比较少，感觉有点懈怠了。
另外一个可能确实最近的方法有点偏差，最近学Java开始看英文教程，但是发现看了一段时间好
像收获并不是那么大。然后不断地反思到底哪个环节出现了问题，一开始以为是英文造成了阅读
的负担，但是于是尝试边读边自己翻译成中文，后面发现这个方向有点正确意思了，这才发现其
实根源不在于中英文，而在于我在学习过程中看完后就看完了，输出太少导致印象有点缺失，于
是开始不翻译，而是改掉之前复制粘贴的习惯，手打笔记。大概也是有了一点的成效。

讲讲今天学习的内容：主要包括access modifier(访问修饰符)、this keyword、final keyword、
Java inheritance(继承)、还有Java recursion（递归）（感觉跟c/cpp的差不多）、最后就
是instanceof keyword.

第一部分的话大概也就是default private public protected这几种
类型，第二个的话大概就算this和function(this),然后第三部分无非就算用final在variable、
method、class这三个方面是怎么个样子，比如说final声明的类无法作为父类（superclass）被
继承等等。然后第三部分的话继承，主要是利用了extends关键字，然后继承方式比如说有五种，分
别是Single Inheritance  Multilevel Inheritance   Hierachical Inheritance
Multiple Inheritance 以及 Hybrid inheritance，但是这五种其实有几个不太好记得。

这里就大概赘述一下：第一个好理解，就是一对一的继承方式，比如我有一个父类，然后一个子类就去
继承这个父类。第二个也就是多层继承，就是一个子类继承一个父类，然后这个子类再由另一个它的子
类去继承它。第三种是层级继承，就是一个父类被多个子类所继承。第四个是多重继承，是多个父类被
一个子类所继承。最后一个就是混合继承不必多说也自然可以理解

最后一个就是instanceof这个关键字，这里面大概要记得一下的首先就是他的syntax，中间是
instanceof,然后左边是小级别的，右边是高级别的。然后要知道某个子类的对象也是它的父类
的实例，某个类的实例也是这个类实现的接口的实例，大概也就是这些内容了。至于里面的一些
细化的东西后面再去进行记忆一下
