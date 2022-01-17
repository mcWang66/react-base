
### 前期知识准备
1,javascript
2,html+css
3,构建工具 webpack
4,安装node
5,cnpm:加快安装速度
6，官方文档

### 创建项目
npx create-react-app react-demo
cd react-demo
npm start

### 环境介绍
node_modules:非常大
public:入口文件
src:源码文件
package.json

### 全家桶
核心： react ,react-dom

### react 基础知识
JSX语法：Javascript + xml 语法（html）

### 组件
组件的后缀 有 js jsx
但是jsx 会有语法提示
组件名称必须以大写字母开头
-  以类的形式创建  extend React.Component, 使用其中的 render() 渲染函数
-  以函数的形式创建， 直接返回 渲染元素

### props属性
react 组件的属性对象，用于 信息传递


### state
---state 是很有必要的 
- 1, 将函数式组件转换成 class 组件
- 2, 使用state 代替props
- 3, 在构造函数中初始化state
- 4, 在生命周期函数汇总更新state（调用setState） ,告诉react 组件state 已经更新了

`注意`
- setState 会引起视图的重绘
- `setState 更新是 同步还是异步？` 
   - 在可控的情况下是异步，在非可控的情况下是同步 --- `待补充`
- State 的更新会被合并

### 生命周期函数
初始化props
初始化state
componentWillMount --- 在组件渲染前
render()
componentDidMount --- 组件已经渲染
shouldComponentUpdate --- 返回true,false , true 代表允许改变， false 代表不允许改变   ---state props 发生改变
           `state`
           componentWillUpdate -- 数据修改前
           `componentDidUpdate` ---数据修改完成
          `props`
          `componentWillReceiveProps` --- props 发生改变执行
componentWillUnmount -- 卸载


### 属性传递

1， props
 - 父传子： props 属性
 - 子传父： props 方法， 子类通过 this.props.XX 调用父类的方法 进行参数传递


## 条件渲染


## 表单

- 受控组件
- 非受控组件
  

## Refs & DOM

> 几个适合使用 refs 的情况：
管理焦点，文本选择或媒体播放。
触发强制动画。
集成第三方 DOM 库。


## 状态提升
组件之间的数据交互

## 组合 vs 继承

### 二、Redux
- Store: 仓储对象，用于存储状态数据  包含2个属性： type, data
- Reducers: 针对每一个存储状态数据 store 需要编写一个 reducer 函数 （对每一个函数进行增删改查）
- Action Creators: dispath(action), 从而执行reducer方法，完成对数据的修改
- React Components: state

核心原理

#### 2.1 combineReducer
> 使用一个reducer 来响应所有的action，这样会导致这个内部代码太多太复杂，不易于维护



### react-router 