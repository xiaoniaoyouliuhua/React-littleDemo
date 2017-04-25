import React from "react"
export default 
//使用 function 定义个组件
function Comment(props) {
    var styleFather = {
        liStyle:{border:'1px solid red', fontSize:'12px'},
        h3Style:{color:'green'}
    }
   return <li style={styleFather.liStyle}>
        <h3 style={styleFather.h3Style}>评论内容：{props.content}</h3>
        <p>评论人：{props.user}</p>
    </li>
}

