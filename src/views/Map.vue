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
    name: 'Map',
    components: { MapCount, Person },
}
</script>

<style scoped></style>