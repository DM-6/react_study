// action 是一个描述事件的简单对象，它是改变 store 中 state 的唯一方法，它通过 store.dispatch() 方法来将 action 传到 store 中。

import * as ActionTypes from './actionTypes';

export function showPlayer(showStatus){
    return{
        type: ActionTypes.SHOW_PLAYER,
        showStatus
    }
}

export function changeSong(song){
    return{
        type: ActionTypes.CHANGE_SONG,
        song
    }
        
}

export function setSongs(songs){
    return{
        type: ActionTypes.SET_SONGS,
        songs
    }
}

export function removeSong(id){
    return{
        type: ActionTypes.REMOVE_SONG_FROM_LIST,
        id
    }
}
