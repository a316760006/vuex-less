<template>
    <div>
        <!-- <span>state里面的名字: {{username}}</span><br> -->
        <!-- <span>getters里面的名字: {{mousername}}</span><br> -->
        <span @click="modifyUser">点击修改名字</span><br>
        <!-- <span>{{$store.state.user.name}}</span> -->
        <span>{{name}}{{rename}}</span> 
        <span @click="setname()">模块改名</span>
    </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
// import {mapState,mapGetters,mapActions} from 'vuex'
const {mapState,mapGetters,mapActions} = createNamespacedHelpers('user')
export default {
    computed:{
        // ...mapState(['username','name']),
        ...mapState(['name']),
        ...mapGetters(['rename']),        
        // ...mapGetters(['mousername'])
    },
    methods:{
        ...mapActions(['setname']),
        // ...mapActions(['modifyname']),
        modifyUser(){
            this.modifyname()
            // this.$store.dispatch('modifyname')
        }
    }
}
</script>

