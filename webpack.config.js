var path=require("path")
var htmlWebpackPlugin=require("html-webpack-plugin")

module.exports={
    entry:path.resolve(__dirname,"src/main5.js"),
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    module:{
        rules:[
             { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.resolve(__dirname,"src/index.html"),
            filename:"index.html"
        })
    ]
}