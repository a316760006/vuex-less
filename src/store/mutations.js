import * as Types from './mutations-types'
// Types = {SET_USER:"SET_USER"}
// [Types.SET_USER]()      // 这个不是数组
const mutations = {
    [Types.SET_USER](state,payload){
        state.username = payload;
    },
    // 定义和commit提交过来的事件同名的函数addNum   第一个参数永远是state
    addNum(state,payload){
        // 通过函数修改state
        let {a,b} = payload;
        state.count=state.count+a+b;
    },
    toMuAdd(state,payload){
        // commit('toMuAdd')定义actions里面commit传递过来的同名的函数
        state.number+=payload;

    }
}
export default mutations