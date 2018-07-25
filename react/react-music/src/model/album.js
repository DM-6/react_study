// 模型  album的数据操作   album模型

export class Album{    // 向外输出Album类
    constructor(id, mId, name, img, singer, publicTime){
        this.id = id;
        this.mId = mId;
        this.name = name;
        this.img = img;
        this.singer = singer;
        this.publicTime = publicTime;
    }
}

export function createAlbumByList(data){   // 创建当前业务的方法
    return new Album(
        data.album_id,
        data.album_mid,
        data.album_name,
        `http://y.gtimg.cn/music/photo_new/T002R300x300M000${data.album_mid}.jpg?max_age=2592000`,    // img
        filterSinger(data.singers),   // singer
        data.public_time
    )
}

function filterSinger(singers){
    let singerArr = singers.map(singer => {    // singer数组 
        return singer.singer_name;
    });
    return singerArr.join("/");
}
