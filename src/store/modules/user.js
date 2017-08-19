
//
// 用户相关store
//

import * as types from '../mutation-types'
import { userInfo } from '@/api'

// state
const state = {
    userID: null,
    userInfo: null,
}


// mutations
const mutations = {
    [types.CURRENT_USER_ID](state, userInfo) {
        state.userInfo = userInfo
    },
    [types.UPDATE_USER_INFO](state, userInfo) {
        state.userInfo = userInfo
    },
    [types.LOGOUT](state) {
        state.userInfo = null
    }
}


// actions
const actions = {
    setUserID({commit}, uid) {
        commit(types.CURRENT_USER_ID, uid)
    },
    setCurrentUserInfo({commit}, userInfo) {
        if ( state.userID ) {
            userInfo(state.userID).then(res => {
                if ( res.data.code === 200 ) {
                    userInfo = res.data
                } else {
                    console.error('store action setCurrentUserInfo:'+error)
                }
            }).catch(error => {
                console.error(error)
            })
        } else {
            userInfo = null
        }
        
        commit(types.UPDATE_USER_INFO, userInfo)
    },
    logout({commit}) {
        commit(types.LOGOUT)
    }
}


// getters
const getters = {
    userID: state => {
        return state.userID
    },
    userInfo: state => {
        return state.userInfo
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}