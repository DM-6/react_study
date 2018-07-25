//  jsonp需要的东西   提供统一的访问   提供一个通用的jsonp函数

import originJsonp from 'jsonp';      // 引入jsonp
let jsonp = (url, data,option ) => {     // 封装一个jsonp   url,数据,选项
    return new Promise((resolve, reject) => {
        originJsonp(buildUrl(url,data), option, (err, data) => {   // buildUrl 拼接url(url + data) 
            if(!err){
                resolve(data);    // 正常，resolve掉
            } else{
                reject(err);
            }
        })
    })
}

function buildUrl(url, data){
    let params = []; 
    for (var k in data){   
        params.push(`${k}=${data[k]}`);   
    }
    let param = params.join('&');      // 使用&拼接起来
    if(url.indexOf('?') === -1){     // 传过来的URL是否带？
        url += '?' + param;     // 不带？  使用？拼接
    } else{
        url += '&' + param;     // 带？  使用&拼接
    }
    return url;
}

export default jsonp;
