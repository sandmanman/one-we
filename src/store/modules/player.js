//
// Player
//


import * as types from '../mutation-types'
import { music, songDetail } from '@/api'

const state = {
    song: {}, // 当前播放的单曲信息
    isPlaying: false, // 正在播放
    playlist: [], // 播放列表
}

const getters = {
    song: state => {
        return state.song
    },
    isPlaying: state => {
        return state.isPlaying
    },
    playlist: state => {
        return state.playlist
    }
}

const actions = {
    setPlaySong({commit}, id) { // 选中单曲
        music(id).then(res => {
            if(res.data.code === 200) {
                commit(types.UPDATE_SONG, res.data.data[0])
            } else {
                console.error(res.data.code+res.data.msg)
            }
        }).catch(error => {
            console.error(error)
        })
        
    },
    setPlaylist({commit}, id) { // 播放列表
        songDetail(id).then(res => {
            if(res.data.code === 200) {
                var song = res.data.songs[0]
                commit(types.UPDATE_PLAYLIST, {song})
            } else {
                console.error(res.data.code+res.data.msg)
            }
        }).catch(error => {
            console.error(error)
        })
        
    },
    clearPlaylist({commit}) { // 清除播放列表
        commit(types.CLEAR_PLAYLIST)
    }
}

const mutations = {
    [types.UPDATE_SONG](state, item) {
        if ( !(state.song.item && state.song.item.id == item.id) ) {
            state.song = {
                isAdd: true,
                item,
            }
        }
    },
    [types.UPDATE_PLAYLIST](state, {song, source, isAdd}) {
        // 查询是否已存在某个单曲
        var record = state.playlist.find(element => element.song.id == song.id)
        if ( !record ) {
            state.playlist.push({
                song, // 单曲信息
                source: state.song, // 单曲mp3地址
            })
        }
    },
    [types.CLEAR_PLAYLIST](state) {
        state.playlist = []
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}