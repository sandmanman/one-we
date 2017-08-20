
//
// 用户相关store
//

import * as types from '../mutation-types'
import { docCookies, localStorage } from '@/utils'
import { userInfo } from '@/api'

// state
const state = {
    userID: null,
    userInfo: null,
}


// mutations
const mutations = {
    [types.CURRENT_USER_ID](state, userID) {
        state.userID = userID
    },
    [types.UPDATE_USER_INFO](state, userInfo) {
        state.userInfo = userInfo
    },
    [types.LOGOUT](state) {
        state.userID = null
    }
}


// actions
const actions = {
    setUserID({commit}, userID) {
        commit(types.CURRENT_USER_ID, userID)
    },
    setCurrentUserInfo({commit}, userID) {
        userInfo(userID).then(res => {
            if ( res.data.code === 200 ) {
                console.log('打发打发打发')
                commit(types.UPDATE_USER_INFO, res.data)
            } else {
                console.error('store action setCurrentUserInfo:'+error)
            }
        }).catch(error => {
            alert('获取数据错误')

            console.error(error)
            
            commit(types.LOGOUT)
            // 删除Cookie
            docCookies.removeItem('__csrf')
            // 删除localStorage
            localStorage.remove('CURRENT_USER_ID')

            console.log('Cookie[__csrf]:'+docCookies.hasItem('__csrf'))
        })
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