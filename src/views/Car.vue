<template>
    <div>
        <!-- {{carlist}} -->
        <ul>
            <li v-for="item in carlist":key=item.id>
                <img :src="item.img" alt="">
                <p>{{item.name}}</p>
                <p>{{item.price}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState(['carlist'])
    }    
}
</script>

