import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'


import currentUser from './modules/user'
import player from './modules/player'

import * as actions from './actions'


export default new Vuex.Store({
    actions,
    modules: {
        currentUser,
        player
    },
    strict: debug,
})