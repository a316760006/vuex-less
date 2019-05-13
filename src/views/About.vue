<template>
  <div class="about">
    {{$store.state.count}}
    {{$store.getters.Num}}
    <button class="btn" @click="addcount">+</button>
  </div>
</template>
<script>
  export default {
    methods:{
      addcount(){
        // 1.提交addNum事件到mutations
        this.$store.commit('addNum',{a:2,b:3});     // addNum  是自定义事件名
        
      }
    }
  }
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