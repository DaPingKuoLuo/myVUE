<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color: chocolate;">MapCount组件求和为：{{ sum }}</h3>
        <h3 style="color: rgb(23, 114, 242);">列表中第一个人的名字是：{{ firstPersonName }}</h3>
        <el-input v-model="name" placeholder="请输入" @change="addPerson"></el-input>
        <el-button @click="addWang" type="primary">添加一个姓王的人</el-button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { nanoid } from 'nanoid'
export default {

    name: 'Person',
    data() {
        return {
            name: '',
        }
    },
    computed: {
        // ...mapState(['personList'])
        personList() {
            return this.$store.state.personOptions.personList
        },
        sum() {
            return this.$store.state.countOptions.sum
        },
        firstPersonName() {
            console.log(this.$store)
            return this.$store.getters['personOptions/firstPersonName']
        }
    },
    methods: {
        addPerson() {
            const personObj = { id: nanoid(), name: this.name }
            this.$store.commit('personOptions/ADD_PERSON', personObj)
            this.name = ''
        },
        addWang() {
            const personWang={id:nanoid(),name:this.name}
            this.$store.dispatch('personOptions/addPersonWang',personWang)
           
        }
    },



}
</script>


<style scoped>
.el-input {
    width: 20%;
}

.el-button {
    margin-left: 1%;
}

ul {
    width: 10%;
    margin: 1% auto;
}
</style>