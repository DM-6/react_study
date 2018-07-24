// 不同环境配置

// const baseConfig = require('./overrides-config.base');

// module.exports = function(config){
//     let alias = config.resolve.alias;
//     alias["@"] = baseConfig.rootPath;


//     let loaderList = config.module.rules[1].oneOf;    // 在已有配置里 规则
//     loaderList.splice(loaderList.length - 1, 0, {   // 切割
//         test: /\.styl$/,     // 添加配置
//         use: ["style-loader", "css-loader", "stylus-loader"]   // 添加依赖
//     });

//     config.plugins.push(baseConfig.stylusLoaderOptionsPlugin);

// }

const baseConfig = require('./overrides-config.base')
module.exports = function(config) {
    let alias = config.resolve.alias;
    alias["@"] = baseConfig.rootPath;
    let loaderList = config.module.rules[1].oneOf;
    loaderList.splice(loaderList.length - 1, 0 ,{
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
    });
    config.plugins.push(baseConfig.stylusLoaderOptionsPlugin);
}
