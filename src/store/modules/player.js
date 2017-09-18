//
// Player
//


import * as types from '../mutation-types'
import { music, songDetail } from '@/api'

const state = {
    songSource: {}, // 单曲mp3地址
    songInfo: {}, // 单曲信息
    isPlaying: false, // 正在播放
    playlist: [], // 播放列表
}

const getters = {
    songSource: state => {
        return state.songSource
    },
    songInfo: state => {
        return state.songInfo
    },
    isPlaying: state => {
        return state.isPlaying
    },
    playlist: state => {
        return state.playlist
    }
}

const actions = {
    setPlaySong({dispath, commit}, id) {
        // 判断当前song id 是否已经存在
        if( id !== state.songInfo.id ) {
            // 获取单曲mp3地址
            music(id).then(res => {
                if(res.data.code === 200) {
                    commit(types.UPDATE_SONG, res.data.data[0])
                    commit(types.PLAY_AUDIO)
                } else {
                    console.error(res.data.code+res.data.msg)
                }
            }).catch(error => {
                console.error(error)
            })
        }
    },
    setPlaylist({commit}, id) { 
        if( id !== state.songInfo.id ) {
            // 获取单曲信息
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
        }
        
    },
    clearPlaylist({commit}) { // 清除播放列表
        commit(types.CLEAR_PLAYLIST)
    }
}

const mutations = {
    [types.UPDATE_SONG](state, item) {
        if ( !(state.songSource && state.songSource.id == item.id) ) {
            state.songSource = item
        }
    },
    [types.PLAY_AUDIO](state) {
        var audio = new Audio()
        
        if ( state.songSource ) {
            audio.src = state.songSource.url
            audio.play()

            state.isPlaying = true
        }
    },
    [types.UPDATE_PLAYLIST](state, {song, source, isAdd}) {
        state.songInfo = song
        // 查询是否已存在某个单曲
        var record = state.playlist.find(element => element.song.id == song.id)
        if ( !record ) {
            state.playlist.push({
                song, // 单曲信息
                source: state.songSource, // 单曲mp3地址
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