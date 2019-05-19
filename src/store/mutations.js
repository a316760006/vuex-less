import Vue from 'vue'
import * as Types from './mutations-types'
export default{
    // 改变全选
    [Types.CHANGE_CHECKALL](state,payload){
        console.log(payload)
        // 每一项的选中值 = 全选的选中值 
        state.carlist.forEach(item=>{
            item.sele = payload
        });
        state.carlist = [...state.carlist]
    },
    [Types.ADD_CAR](state,payload){
        // 判断购物车里面有没有这个商品.没有的话数量等于1 有的话在原有的数量上面加1
        let good = state.carlist.find(item=>item.id == payload.id)
        if(good){
            // 把添加进去购物车的变成选中状态
            Vue.set(good,'sele',true);
            good.count += 1;
            // 修改vuex里面的数据必须手动更新
            state.carlist = [...state.carlist];
        }else{
            payload.count=1;
            Vue.set(payload,'sele',true);
            // 如果没有这个商品 把添加的商品放到购物车数组里面
            state.carlist = [...state.carlist,payload]
        }


        // 在缓存里面定义一个购物车列表,并存放数据
        localStorage['carlist'] = JSON.stringify(state.carlist)
    },
    addnum(state,payload) {
        if (payload.num) {
          //num存在证明点击的是加号或者减号，否则点击的是单选
          payload.good.count +=payload.num;
          if (payload.good.count < 1) {
            payload.good.count = 1;
          }
        }
    },
    delete(state,payload){
        // console.log(payload)
        state.carlist = state.carlist.filter(good=>good.id!=payload.id)
    }
}