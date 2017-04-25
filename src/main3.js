import React from "react"
import ReactDOM from "react-dom"

//创建组件 使用 function构造函数的形式 创建基本的组件
function Hello(props){
    return <div>
        <div>这个是Hello组件</div>
        <h3>姓名：{props.username}-----年龄：{props.age}</h3>
    </div>
}

ReactDOM.render(<div>
    {/*往子组件内部通过props传递一些数据进去*/}
    <Hello username="zs" age={20}></Hello>
    
</div>,document.getElementById("app"))