<template>
    <div>
        <MapCount />
        <Person />
        <el-main></el-main>
    </div>
</template>

<script>
import MapCount from '@/components/MapCount.vue'
import Person from '@/components/Person.vue'
export default {
    name: 'map',
    components: { MapCount, Person },
    data(){
        return{

        }
    },
    methods:{
        
            
    },
    mounted(){
        console.log('Map',this.$route)
    }
}
</script>

<style scoped></style>