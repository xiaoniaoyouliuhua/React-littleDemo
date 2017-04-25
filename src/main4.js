import React from "react"
import ReactDOM from "react-dom"

class Haohao extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"0"
        }
    }
    render(){//帮我们创建一颗DOM树
        this.state.username=1;
        return <div>我是{this.props.username},呼叫土豆，听到请回答</div>
    }
}

ReactDOM.render(<div>
        <Haohao username="小号"></Haohao>
    </div>,document.getElementById("app"))