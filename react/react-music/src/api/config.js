// 所有接口配置
// 定义常量：URL PARAM OPTION CODE_SUCCESS

const URL = {    // URL管理
    carousel: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',      // 滑动幻灯片 数据接口
    newalbum: 'https://u.y.qq.com/cgi-bin/musicu.fcg'     // 专辑列表  数据接口
}

const PARAM = {
    format: 'jsonp',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0
}

const OPTION = {    // 选项
    prefix: "callback",
    param: "jsonpCallback"
}

const CODE_SUCCESS = 0;     // 成功响应常量

export { URL, PARAM, OPTION, CODE_SUCCESS };    // 向外输出这个模块
