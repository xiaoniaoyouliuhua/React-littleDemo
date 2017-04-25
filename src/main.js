import React from "react"
import ReactDom from "react-dom"

//创建虚拟DOM
// var pObj=React.createElement("p",null,"这个是div内部的P标签")

// var divObj=React.createElement("div",
// {title:"this is div",className:"app"},
// "这是一个Div",
// pObj
// )

//自定义组件
var hello=()=>{
    return <div>
        <div>这是一个组件</div>
    </div>
    
}

//将创建的额虚拟DOM挂在到页面上
ReactDom.render(<div>我在写JS的地方写了标签<hello></hello></div>,document.getElementById("app"))