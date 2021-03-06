// 推荐  模块  负责推荐列表 接口的定制服务   接口业务的js文件

import jsonp from './jsonp';  // 引入抽象好的jsonp
import { URL,PARAM, OPTION } from './config';    // 解构来自config.js 的东西

export function getCarousel(){   // 封装的getCarousel函数   幻灯片数据
    const data = Object.assign({}, PARAM, {     // Object.assign可以给对象一直赋值
        g_tk: 701075963,
        uin: 0,
        platform: "h5",
        needNewCode: 1,
        _: new Date().getTime()
    });
    return jsonp(URL.carousel, data, OPTION);
}

// 有一个数据的需求，就到api相应业务文件下添加一个方法就好
export function getAlbumInfo(albumMid){     // 封装的getAlbumInfo函数  专辑列表
    const data = Object.assign({}, PARAM, {     // Object.assign可以给对象一直赋值
        albumid: albumMid,
        g_tk: 1278911659,
        hostUin: 0,
        platform: "yqq",
        needNewCode: 0
    });
    return jsonp(URL.albumInfo, data, OPTION);
}

export function getNewAlbum() {
	const data = Object.assign({}, PARAM, {
		g_tk: 1278911659,
		hostUin: 0,
		platform: "yqq",
		needNewCode: 0,
		data: `{"albumlib":
		{"method":"get_album_by_tags","param":
		{"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":50,"click_albumid":0},
		"module":"music.web_album_library"}}`
	});
	const option = {
		param: "callback",
		prefix: "callback"
	};
	return jsonp(URL.newalbum, data, option);
}

