
//
// 用户相关store
//

import * as types from '../mutation-types'

// state
const state = {
    userInfo: null,
}


// mutations
const mutations = {
    [types.CURRENT_USER](state, userInfo) {
        state.userInfo = userInfo
    },
    [types.LOGOUT](state) {
        state.userInfo = null
    }
}


// actions
const actions = {
    setCurrentUserInfo({commit}, userInfo) {
        commit(types.CURRENT_USER, userInfo)
    },
    logout({commit}) {
        commit(types.LOGOUT)
    }
}


// getters
const getters = {
    userInfo: state => {
        return state.userInfo
    },
    userID: state => {
        if( state.userInfo ) {
            return state.userID = state.userInfo.account.id
        }
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}