//首先导入 React这个模块机，穿件虚拟的DOM
import React from "react"
import ReactDom from "react-dom"//npm i react react-dom --save react 是帮我们创建组件的
//而 reactDom是进行DOM操作的模块 比如说 把控 创建好的虚拟DOM 渲染到页面上
var divObj = React.createElement("div",
    {
        title: "this is div",
        className: "divHeader",
        "data-username": "zs"
    },
    "这是一个div",
    React.createElement("p",null,"这是div内部的P"))
    var username="尼古拉斯*赵四"

//将创建好的虚拟DOM 渲染到页面上 参数1：需要被渲染的虚拟DOM 参数2：容器 用来防止虚拟DOM
ReactDom.render(<div>hahaha<p>这是内部的P标签{username}</p></div>,document.getElementById("app"))

