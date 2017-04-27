##Promise
	1.promise是一个异步代码规范（下一次的AJAX请求依赖于上一次的AJAX请求）
	2.你new一个Promise 就会立即执行这个对象所表示的异步操作
	`
	$.get("url",function(data1){
    	console.log(data1);
    	$.get("url2",funcrion(data2){
    		consoe.log(data2);
    	})
    })
    `
    传统这种回调函数模式，代码前台层级太深，二期不利于阅读，更重要的是，复用性不强！
    #####Promise的异步代码规范，表示左一个异步的操作
    promise是一个构造函数 如果需要用的话 就需要new一个Promise对象，在这个构造函数上想要用Promise的then 就需要new一个实例
    既然是异步的请求 我们不知道什么时候结束 ，当时 我们肯定知道，做的这个异步的事情，肯定有一个结果，要么这件事情成功了，要么失败了
    所以，我们可以在这件异步的事情正在执行的时候哦，就预先为执行的结果，指定两个回调函数，一个是成功的回调函数，一个是失败的回调函数
    `var promise=new Promise(function(ok,no){
    	//模拟一个异步操作
        var result=**
        if(//异步操作成功){
         	 ok(result)
        }else{
            no(result)
        }
    }) 这个对象就是代表一个异步的操作`
    在调用promise实例上的then方法的时候，必须指定成功的回调函数，失败可以不传
    `promise.then(成功回调函数，失败的回调函数)`
	##我不想让他立即执行 我们可以把整个promise的实例放入一个函数内部
    `function f1(){
    	return new Promise(function(ok,no){
    	//模拟一个异步操作
       		 var result=**
       	 if(//异步操作成功){
         	 ok(result)
        }else{
            no(result)
        }
   		 })
    }
    	f1().then(function(result){

        })
    `
    ##当调用包含promise对象的函数的时候，这个异步操作并没有执行完成，我们通过。then的形式事先为其定义一个成功的回调函数
    ##项目结构搭建和布局
    1.借助 Ant Desigin 组件库美化页面
    2.npm i antd --save
    3.导入需要的ANT组件
    4.样式美化 导入样式表
    5.优于上面我们只使用了很少的一部分组件，但是引用了整个 按需加载 看官网
    6.安装按需加载 `npm i babel-plugin-import --save-dev`
    7.修改`.babelrc 在里面 添加这个包的配置`
    8.只要引用ANT这个包 `import {datapiker} from "antd"`
##使用react-router-dom 实现路由跳转
	1.运行”npm i react-router-dom --save“
	2.导入`react-router-dom`组件
	`imprt {HashRouter as Router,Link,Router} from "react-router-dom"`
    3.改造路由：
    +使用“router”作为根容器，将整个应用包裹起来 注意 ：Router内部 只能有位移的一个子元素
    +改造路由的超链接
    ```
    <Link to="/">首页</Link>
    ```
    +改造路由规则，在路由规则中
    ```
    
    ```
##exact 绝对匹配
##this.prop和Router之间的关系
	[]()
##AJAX es6中的fetch
	+通过fetch("请求地址") 请求回来的是一个promise对象  指定成功的回调函数 then.（function(respont){}） response也是一个promise对象 ----》response.json(); .then(function(data){}) 这里才是我们想要的数据