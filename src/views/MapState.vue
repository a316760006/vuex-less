<template>
  <div class="about">
    {{count}}
    {{username}}
    {{Num}}
    {{abc}}
  </div>
</template>
<script>
  import {mapState,mapGetters} from 'vuex';
  import {constants} from 'fs';
  export default {
    computed:{
      ...mapState(['count','username']),
      ...mapGetters({
        abc:'Num'
      }),
      ...mapGetters(['Num'])
      // ...mapState({
      //   count:state=>state.count
      // })
    },
    created(){
      console.log(this.count)
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