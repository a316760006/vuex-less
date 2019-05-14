<template>
    <div>
        <span>{{username}}</span>
        <button @click="getuser">获取用户名</button>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['username'])
    },
    methods:{
        ...mapActions(['getname']),
        getuser(){
            this.getname()
            // this.$store.dispatch('getname')
        }
    }
}
</script>

