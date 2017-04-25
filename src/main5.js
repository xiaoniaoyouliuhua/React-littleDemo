import React from "react"
import ReactDOM from "react-dom"

import CommentList from "../components/commentsList"
//使用class创建一个评论列表组件


//将虚拟DOM 挂载到页面的容器中
ReactDOM.render(<div>
    <CommentList></CommentList>
</div>, document.getElementById("app"))
