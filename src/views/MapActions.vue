<template>
  <div class="home">
    {{$store.state.number}}
    <button class="btn" @click="ActionsAdd(10)">+</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'


export default {
  name: "home",
  methods:{
    created(){
        this.add()
    },
    ...mapActions(['ActionsAdd']),
    // ActionsAdd(){
        
    // }
  }
};
</script>
<style lang="less" scoped>
  .btn{
    width: 50px;
    height: 50px;
    line-height: 50px;
    background: yellow;
    appearance: none;
    outline: none;
    font-size: 40px;
  }
</style>