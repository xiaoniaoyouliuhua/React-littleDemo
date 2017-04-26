import React from "react"

class Parent extends React.Component{
    constructor(props){
        super(props);
        parent.state={
            typeInfo:"in_theaters"
        }
        // console.log(this)
    }
   
    render(){
        return <div>
            <h3>这是父组件</h3>
            <input type="button" value="in_theaters" onClick={()=>{this.handleBtnClick("in_theaters")}}/>
            <input type="button" value="coming_soon" onClick={()=>{this.handleBtnClick("coming_soon")}}/>
            <input type="button" value="top250" onClick={()=>{this.handleBtnClick("top250")}}/>
            <br/>
            {/*<Son one={this.state}></Son>*/}
            <Son {...this.state}></Son>
            {/*{console.log(this.state.typeInfo)}*/}
        </div>
    }
    // componentDidMount(){
    //     console.log(this.state.typeInfo)
    // }
    // componentWillReceiveProps(){
    //     console.log(this.state.typeInfo)
    // }
    handleBtnClick(type){
        this.setState({
            typeInfo:type
        },function(){
            // console.log(this.state.typeInfo)
        })
    }
}
class Son extends React.Component{

    render(){
        return <div>
            <h3>这是子组件</h3>
            <p>当前的电影类型：{this.props.typeInfo}</p>
            {/*{console.log(this.props.one)}*/}
        </div>
    }
    componentWillReceiveProps(nextProps){
        console.log("在componentWillReceiveProps中监听到的最新的属性信息："+nextProps.typeInfo)
    }
}
export default Parent