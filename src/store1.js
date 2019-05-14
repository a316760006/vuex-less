import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
export default new Vuex.Store({
    // strict:false,       // 是否启用严格模式
    strict:process.env.NODE_ENV == 'development',
    state:{
        count:1,
        number:2,
        username:"lilili"
    },
    getters:{
        Num:function(state){
            return state.count+"abc"
        }
    },
    mutations:{
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
    },
    actions:{
        // this.$store.dispatch('ActionsAdd')
        // 2.定义和dispath传递过来的事件同名的函数
        ActionsAdd({commit},payload){
            // 提交事件到mutations
            setTimeout(function(){
                commit('toMuAdd',payload)
            },500)
        },
    }
})