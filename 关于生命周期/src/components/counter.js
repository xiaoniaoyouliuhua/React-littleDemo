import React from "react"
import propTypes from "prop-types"
//暴露
export default class Counter extends React.Component{
   constructor(props){
       super(props);
       this.state={
           count:props.initCount
       }
   }
    //设置默认属性
    static defaultProps={
        initCount:0
    }
    //校验 第三方包
    static propTypes={
        initCount:propTypes.number
    }
    //使用setState函数 不能在render里使用 这里获取不到DOM
    componentWillMount(){
        this.setState({
 count:this.state.count+1
        })
       
    }
    //每个组件必须有render
    render(){
        return <div>
            <input ref="btnAdd" type="button" value="我是小黄，打我啊" onClick={this.handleCountAdd}/>
            <h1>统计小黄总共被打了{this.state.count}</h1>
        </div>
    }
    组件已经挂载到了页面上
    // componentDidMount(){
    //     this.refs.btnAdd.onclick=()=>{
    //         this.setState({
    //             count:this.state.count+1
    //         })
    //     }
    // }
    handleCountAdd=()=>{
        this.setState({
                count:this.state.count+1
            })
    }

    //表示组件是否需要被立即更新 ，只要有这个方法 就必须返回一个布尔值
    shouldComponentUpdate(nextprops,nextState){
        if(nextState.count%2===0){
            return true;
        }
        return false;
    }
}