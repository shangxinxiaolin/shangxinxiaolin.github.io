---
layout:     post                      # 使用的布局（不需要改）
title:      日概要                    # 标题
subtitle:   今日                      # 副标题
date:       2025-12-17 10:00:00 +0800 # 时间（修正语法）
author:     XL                        # 作者
header-img: img/post-bg-universe.jpg  # 这篇文章标题背景图片
catalog:    true                      # 是否归档
category:   study                     # 分类（tech/life/study/other）
tags:                                 # 标签
    - 生活
    - 大一
---
12.17

12.17

今天感觉干的事情不是很多，一方面确实偷懒了，然后另一方面来说今天还有C语言的考试。
感觉一方面C的一些syntax确实自己已经不记得了。另一方面来说确实因为我没有刷过算法
题，所以哪怕一些简单的算法也刷的比较费劲，时间长，所以考试里也就做出了第一道算法
题。可能也因为我是裸考有点关系？那既然做的事情不多，今天就精讲一下今天Java学习的
一个内容：Method Override (方法重写)

首先第一部分让我来想想我应该讲什么。那就讲讲@override annotation吧，这是一个方法
重写的注解。会作为metadata(元数据)传递给complier,其实这句话我也不太理解（）。但是
可以知道的是，当你加上这个注解后，complier就会根据以下的规则去对你的override进行检
查，也就是你的override必须符合以下的规则。

1.首先第一条规则就是你的所override的那个method必须在superclass和subclass中都有着
相同的name，并且返回类型和传递的参数要完全一致.2.其次，如果那个method已经被declare
为final或者是static，那你就无法对其进行override.3.最后，如果superclass中存在
abstract method,那么我们就必须对其进行override.

第二个部分的话讲讲super keyword，如果我们已经对子类中继承自父类的method进行了override
,那么我们又想调用原来override之前的method，那该怎么做呢。（这里需要注意，Override并
不是删除或者修改原来的method,而只是将原来的method覆盖了）言归正传，那么我们就需要去使用
super关键字。比如说被我们重写的方法叫作displayInfo(),那么就是在子类中调用super.displayInfo()
就可以调用被重写之前的method.

这里需要注意到的一个点是constructor在Java中是无法被Inherit的，所以因为无法被继承，所以自然
也就无法去重写。但是我们仍然可以通过super关键字去调用父类中的constructor,这里后面会讲到。就
暂时跳过。

接下来是Access Specifier in Override,就是在重写过程中我们可以去修改方法的访问权限。这里讲一下
之前讲过的一些Access modifier,最低级的就是private,只能在同一个类中去访问。然后到default,只能
在类及其所在的包内被访问。然后到Protected，这个在前面的基础上，还可以在继承他的subclass里面去
被访问，无论这个子类处在哪个package里面。最高级别的就是public,可以在任意位置被访问。接下来讲
方法重写当中，我们修改访问权限只能将低级别的修改为高级别的，而不能反着来，只需要遵循这个原则也
就可以了。

最后在提一下前面讲的一个东西，就是父类中的abstract method,必须要被重写，这里我们就不讲，在后面
将会讲到。
