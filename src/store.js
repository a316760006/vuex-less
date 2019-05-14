import Vue from "vue";
import Vuex from "vuex";
import {setuser} from './api'
Vue.use(Vuex)
export default new Vuex.Store({
    // strict:false,       // 是否启用严格模式
    strict:process.env.NODE_ENV == 'development',
    state:{
        // 初始化数据要在state
       username:null
    },
    actions:{
       async getname({commit}){
        let username = await setuser()
        commit('getname',username)
        console.log(username)
       }
    },
    mutations:{
        getname(state,payload){
            state.username = payload
        }
    }
})