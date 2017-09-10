
//
// 用户相关store
//

import * as types from '../mutation-types'
import { docCookies, localStorage } from '@/utils'
import { userProfile } from '@/api'

// state
const state = {
    userID: null,
    userProfile: null,
}


// mutations
const mutations = {
    [types.CURRENT_USER_ID](state, userID) {
        state.userID = userID
    },
    [types.UPDATE_USER_PROFILE](state, userProfile) {
        state.userProfile = userProfile
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
    setCurrentUserProfile({commit}, userID) {
        userProfile(userID).then(res => {
            if ( res.data.code === 200 ) {
                console.log('打发打发打发')
                commit(types.UPDATE_USER_PROFILE, res.data)
            } else {
                console.error('store action setCurrentuserProfile:'+res.data.code+ ':'+res.data.message)
            }
        }).catch(error => {
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
    userProfile: state => {
        return state.userProfile
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}