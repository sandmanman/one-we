//
// Player
//


import * as types from '../mutation-types'
import { music, songDetail } from '@/api'

const state = {
    song: [], // 当前播放的单曲信息
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
    setPlaySong({commit}, id) {
        music(id).then(res => {
            if(res.data.code === 200) {
                commit(types.UPDATE_SONG, res.data.data)
            } else {
                console.error(res.data.code+res.data.msg)
            }
        }).catch(error => {
            console.error(error)
        })
        
    },
    setPlaylist({commit}, id) {
        songDetail(id).then(res => {
            if(res.data.code === 200) {
                var song = res.data.songs[0]
                commit(types.UPDATE_PLAYLIST, song)
            } else {
                console.error(res.data.code+res.data.msg)
            }
        }).catch(error => {
            console.error(error)
        })
        
    },
    clearPlaylist({commit}) {
        commit(types.CLEAR_PLAYLIST)
    }
}

const mutations = {
    [types.UPDATE_SONG](state, song) {
        state.song = song
    },
    [types.UPDATE_PLAYLIST](state, song) {
        state.playlist.push(song)
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