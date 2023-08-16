<template>
    <div>
        <MapCount />
        <Person />
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

<style lang="scss" scoped></style>