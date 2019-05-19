import * as Types from './mutations-types'
const actions = {
    addCar({commit},payload){
        commit(Types.ADD_CAR,payload)
    },
    addNum({commit},payload){
        commit('addnum',payload)
    },
    deletegood({commit},payload){
        commit('delete',payload)
    }
}
export default actions