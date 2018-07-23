const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',     // 入口文件
    output: {
        filename: 'main.js',           // 打包的文件名
        path: path.resolve('dist')      // 打包
    },
    devServer: {          // 运行区域
        port: 3000,      // 运行端口
        open: true      // 自动打开浏览器 打开当前页面
    },
    devtool: 'inline-source-map',     // 开发工具 source-map:源码映射  为webpack打包的文件 创建.map文件（源码对应文件） 解决调试问题
    module: {
        rules: [
            {
                test: /\.js/,
                include: /src/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].css',
            chunkFilename: 'static/css[id].css'   // 文件块
        }),
        new HtmlWebpackPlugin({
            file: 'index.html',
            template: 'public/index.html'
        })      
    ]
}