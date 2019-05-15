import {setuser} from '../api';
import * as Types from './mutations-types';
// console.log(Types);
// Types = {SET_USER:"SET_USER"};
const actions = {
    async modifyname({commit}){
        let name = await setuser()
        commit(Types.SET_USER,name)
        // commit("SET_USER",name)
    },
    async getname({commit}){
        let username = await setuser()
        commit(Types.SET_USER,username)
        console.log(username)
    },
    async ActionsAdd({commit},payload){
        // 提交事件到mutations
        setTimeout(function(){
            commit('toMuAdd',payload)
        },500)
    },
}
export default actions