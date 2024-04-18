---
title: 画布视图
---

:::tip
MyBricks 设计器（以下简称设计器）提供了灵活、强大的 UI 布局表现能力，能够搭建复杂、响应式的界面。
:::

![Alt text](img/image-16.png)

在 **[「用户界面」](../user-interface)** 章节中介绍了画布视图区域的界面和基本操作。

## 布局理念
通过 **插槽/组件** 相互嵌套的结构来表现不同的布局结构场景：

![Alt text](img/image-17.png)

如下图：

![Alt text](img/image-18.png)

## 插槽与布局

插槽（Slot）是可以“包含”、“容纳”其他组件的容器，在结构视图中，以如下标识：

![Alt text](img/image-19.png)

可以将组件拖动到插槽中，除非该插槽的声明与组件不兼容（详见后续章节说明），插槽具有不同的布局能力，一般有如下选项：

![Alt text](img/image-20.png)

分别对应：垂直方向弹性布局、水平方向弹性布局、以及自由排列布局。如下图是自由排列的例子：

![Alt text](img/image-21.png)

值得注意的是，画布也是一个插槽。

## 组件的尺寸、外间距与定位

插槽中的组件，通过尺寸、外间距以及定位的方式表现结构外观。

### 尺寸：
组件的尺寸包括宽度与高度两部分，包括三种情况：

1. **固定尺寸：** 固定的宽度或高度，这种情况下往往是可以改变宽度或高度的；

![Alt text](img/image-22.png)

2. **实际尺寸：** 适应其自身的实际宽度或高度，通过 通用编辑面板中的 “适应内容的宽度/高度”按钮完成：

![Alt text](img/image-23.png)

3. **最大可能尺寸：** 适应插槽的尺寸，通过 通用编辑面板中的 “最大可能的宽度/高度”按钮完成：

![Alt text](img/image-24.png)

### 外间距：

组件通过通用编辑面板中的 “外间距”编辑项可以指定与其他组件/插槽的间距，边距可以为负值：

![Alt text](img/image-25.png)

### 定位：
组件的定位方式包括了：占位、固定与自由三种。

占位：在插槽布局方式为纵向排版或横向排版的情况下，占位定位表现为占据一定的排版位置；

固定：相对于屏幕固定显示在某个位置；

自由：相对于当前所在插槽固定显示在某个位置；

下图展示了其他组件占位定位，单独某个组件自由定位的情形：

![Alt text](img/image-26.png)


## 多画布

画布是 UI 组件所在的背景，可以为画布设置尺寸、背景等。当一个画布中的 UI 组件数量过多时，可以通过拆分为多画布对 UI 组件进行整理。

多个画布为水平排列，画布可能作为页面或 UI 组（模块、对话框等），页面可以嵌套 UI 组，但不可以嵌套页面，画布间支持数据通信。

### 添加 / 删除

点击导航按钮 `#` 可以依次通过「导航 > 新建场景」路径新建画布。

![Alt text](img/image-27.png)

当聚焦某一画布时，在画布标题区域点击鼠标右键，可以对画布进行删除操作。或者通过 `Backspace键` 或 `Delete键` 进行快捷删除操作。

![Alt text](img/image-28.png)

### 显示 / 隐藏

当画布视图区域中画布数量过多时，可以通过显示/隐藏操作进行画面的调整。

显示操作：「 `#` > 画布名称」

隐藏操作：鼠标悬浮至画布标题，点击标题名词右侧的 `X` 按钮

![](img/canvas-display-hidden.gif)

<!-- ### 排序 -->
<!-- ![Alt text](img/image-29.png) -->

用户在搭建页面过程中，在此区域进行操作较多，拖入不同的组件，利用布局组件使得组件排列等。如下图所示，是画布的整个区域。

![Alt text](img/image-8.png)

## 拖拽组件

用户搭建的区域即是画布，用户可以点击或者拖动组件至画布，并进行相应布局操作。同时在画布区域聚焦不同组件或者画布其余区域可以切换不同左侧编辑区。

![Alt text](img/image-9.png)


## 页面宽高调节

当页面内容由于宽高不够折叠隐藏了，这里可以通过宽高轴进行调整，使内容展示。比如对话框中表单表单项过多，超过页面高度，无法编辑表单内容，这时便可以调整页面宽度后，继续编辑。

![Alt text](img/image-10.png)


## 页面调试

这里的类似于播放键的按钮，就是页面调试按钮。可以点击后对页面进行调试，查看页面UI和交互是否符合预期。

![Alt text](img/image-12.png)


## 画布缩放

点击画布缩放按钮的“+”可以放大画布，“-”可以缩小画布。

![Alt text](img/image-13.png)


## 层级展示

点击层级展示条的某个部分，在画布里可以聚焦到对应的组件。

![Alt text](img/image-14.png)


应用场景，比如使用组件在多个容器内嵌套，可以快速聚焦到对应层级的组件，方便编辑。不用在画布中点击聚焦。

![Alt text](img/image-15.png)