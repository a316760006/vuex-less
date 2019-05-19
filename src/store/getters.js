const getters = {
    totalPrice(state) {
        return state.carlist.filter(item => item.sele == true).reduce((prev, next) => {
            return prev + next.count * next.price;
        }, 0);
    },
    checkAllValue(state) {
        return state.carlist.every(item => item.sele == true)
    }
}
export default getters