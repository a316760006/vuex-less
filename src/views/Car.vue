<template>
    <div>
        <!-- {{$store.state.carlist}} -->
        <ul>
            <label for="checkAll">
                <span>全选</span>
                <input type="checkbox" id="checkAll" class="inp" v-model="checkAll">
            </label>
            <li v-for="good in carlist":key="good.id" class="li">
                <div id="box">
                    <table>
                        <tr>
                            <td><input class="inp" type="checkbox" v-model="good.sele"></td>
                            <td><img :src="good.img" alt=""></td>
                            <td>                                
                                <span @click="addNum(good,1)"> + </span>
                                <span>{{good.count}}</span>
                                <span @click="addNum(good,-1)"> -</span>
                            </td>
                            <td><span>{{good.name}}</span></td>
                            <td><p>{{good.price}}</p></td>
                            <td><button @click="deleteGood(good)">删除</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </li>
        </ul>
        <div>总价:{{totalPrice}}</div>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
import * as Types from '../store/mutations-types'
export default {
    computed: {
        ...mapState(['carlist']),
        // ...mapGetters({totalPrice:'Price'}),
        ...mapGetters(['totalPrice','checkAllValue']),
        checkAll:{
            get(){
                return this.checkAllValue
            },
            set(val){
                // console.log(val)
                this[Types.CHANGE_CHECKALL](val)
            }
        }
    },
    methods: {
        ...mapMutations([Types.CHANGE_CHECKALL]),
        addNum(good,num){
            this.$store.dispatch('addNum',{good,num})
        },
        deleteGood(good){
            this.$store.dispatch('deletegood',good)
        }
    }
}
</script>
<style lang="less" scoped>
#box{
    text-align: center;
    margin: 0 auto;
    line-height: 200px;
}
td{
    width: 200px;
    vertical-align:middle;
    text-align:center;
}
.inp {
  flex: 0 auto;
  appearance: none;
  outline: none;
  width: 40px;
  height: 40px;
  border: 1px solid green;
  border-radius: 20%;
  position: relative;
}
.inp:checked.inp::before {
  position: absolute;
  content: "✔";
  width: 20px;
  height: 20px;
  top: 10px;
  left: 10px;
  color: green;
}
// .carlist-con {
//   li {
//     box-sizing: border-box;
//     padding-left: 10px;
//     display: flex;
//     flex-direction: row;
//     .inp {
//       align-self: center;
//     }
//     div {
//       padding-left: 10px;
//       flex: 0 0 auto;
//       img {
//         max-width: 80%;
//       }
//     }
//   }
// }
// .btn {
//   display: inline-block;
//   outline: none;
//   appearance: none;
//   border: none;
//   border-radius: 30px;
//   width: 200px;
//   height: 60px;
//   line-height: 60px;
//   font-size: 30px;
//   background-color: antiquewhite;
// }
</style>

