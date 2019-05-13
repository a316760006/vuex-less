<template>
  <div class="home">
    {{$store.state.number}}
    <button class="btn" @click="AddCount">+</button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods:{
    AddCount(){
      // 1.通过diapatch派发事件到actions    记一下
      this.$store.dispatch('ActionsAdd',10)
    }
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