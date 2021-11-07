import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'


Vue.useAttrs(Vuex)

export default new Vuex.Store({
    state:{
        userProfile: {},
        isAuthenticated: false
    },
    mutations: {
        setUserProfile(state, val, authState){
            state.isAuthenticated = !state.isAuthenticated
            state.userProfile = val
        }
    },
    actions: {

    },
    modules: {

    }
})