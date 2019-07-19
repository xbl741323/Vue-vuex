const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    //大家已经学会了举一反三，大家觉得，在配置文件中，需要手动指定入口和出口
    entry: path.join(__dirname, './src/main.js'),//入口，表示要使用webpack打包哪个文件
    output: {//输出文件相关的配置
        path: path.join(__dirname, './dist'),//指定打包的文件，输出到哪个目录中去
        filename: 'bundle.js'//这是指定输出的文件的名称
    },
    plugins: [//配置插件的节点
        new htmlWebpackPlugin({//创建一个在内存中生成HTML的页面
            template: path.join(__dirname, './src/index.html'),//指定模板页面，将来
            //会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html' //指定生成的页面的名称,
            
        }),
        new VueLoaderPlugin(),
    ],
    module: {//这个节点，用于配置所有的第三方模块加载器
        rules: [//所有第三方的模块的匹配规则
            //配置处理.css文件的第三方loader规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //配置处理.less文件的第三方loader规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //配置处理.scss文件的第三方loader规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            //处理图片路径的loader
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7566&name=[hash:8]-[name].[ext]' },
            //limit给定的值，是图片的大小，单位是byte,如果我们应用的，大于或等于给定的
            //limit值，则不会转为base64格式的字符转，如果图片
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            //处理字体文件的loader对象
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            //配置Babel来转换高级的Es语法
            { test:/\.vue$/, use: 'vue-loader'}//这是处理.vue文件的loader
        ]
    },
    resolve:{//第二种导入完整Vue的方式
        alias:{//设置vue被导入时候的包的路径
            "vue$":"vue/dist/vue.js"
        }
    }
}

