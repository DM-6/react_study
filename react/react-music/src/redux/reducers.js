
import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes';

const initialState = {
    song: {},     // 当前播放的音乐
    songs: [],
    showStates: false     // 管理播放列表是否弹出
}

// 纯函数：输入一样，输出也一样
function song(song = initialState.song, action){    // 修改当前音乐
    switch(action.type){
        case ActionTypes.CHANGE_SONG:
            return action.song;
        default:
            return song;
    }
}

function songs(songs = initialState.songs, action){
    switch(action.type){
        case ActionTypes.SET_SONGS:
            return action.songs;
        default:
            return songs;
    }
}

const reducer = combineReducers({    // combineReducers  合并多个reducer
    song,
    songs
});

export default reducer
