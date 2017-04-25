import React from "react"
import Comment from "./comment"
export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                { user: '张三', content: '哈哈，沙发' },
                { user: '张三2', content: '哈哈，板凳' },
                { user: '张三3', content: '哈哈，凉席' },
                { user: '张三4', content: '哈哈，砖头' },
                { user: '张三5', content: '哈哈，楼下山炮' }
            ]
        }
    }
    //循环遍历每一条评论数据 ，并创建LI元素 将这些li元素 存储为一个数组 并返回
    createComment() {
        /*var list = [];
        for (var i = 0; i < this.state.comments.length; i++) {
            var li = <Comment
                content={this.state.comments[i].content}
                user={this.state.comments[i].user}
                key={i}
            ></Comment>
            list.push(li)
        }
        return list;*/
        return this.state.comments.map((item,i)=>{
            /*return <Comment
                content={item.content}
                user={item.user}
                key={i}
            ></Comment>*/
            return <Comment {...item} key={i}></Comment>
        })
    }
    //必须要有个render
    render() {
        return <div>
            <ul>
                {this.createComment()}
            </ul>
        </div>
    }
}