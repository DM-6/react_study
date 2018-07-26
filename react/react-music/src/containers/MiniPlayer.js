// container 文件夹  使用到redux的组件放在这
// 给component里的组件（没有状态，没有action去触发）传递数据

import React, { Component } from 'react';
import MiniPlayer from '../components/play/MiniPlayer';
import { connect } from 'react-redux';
import { changeSong } from '../redux/actions';
 
const mapStateToProps = (state) => ({    //映射Redux全局的state到组件的props上
    currentSong: state.song,
    playSongs: state.songs
});

const mapDispatchToProps = (dispatch) => ({   //映射dispatch到props上
    changeCurrentSong: (song) => {
        dispatch(changeSong(song));   // dispatch方法 调用action
    }
})

// 将ui组件包装成容器组件
export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);    // 连接 状态
