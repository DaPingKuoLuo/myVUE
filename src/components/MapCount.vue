<template>
    <div>
        <h1>当前求和为:{{ sum }}</h1>
        <h2>当前求和放大10倍后为:{{ bigSum }}</h2>
        <h2>我在{{ school }}, 学习{{ subject }}</h2>
        <h3 style="color: burlywood;">Pserson组件的总人数是：{{ personList.length }}</h3>
        <el-select v-model="n" @change="print">
            <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
        <el-button type="primary" @click="increment(n)">+</el-button>
        <el-button type="primary" @click="decrement(n)">-</el-button>
        <el-button type="primary" @click="incrementOdd(n)">当前求和为奇数再加</el-button>
        <el-button type="primary" @click="incrementWait(n)">等一等再加</el-button>
        <el-button type="primary" @click="print">打印</el-button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'Map',
    data() {
        return {
            n: 1,
            m: 3,
            options: [
                { value: 1, label: 1 },
                { value: 2, label: 2 },
                { value: 3, label: 3 }
            ]
        }
    },
    computed: {

        // 借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState('countOptions',['sum', 'school', 'subject']),
        ...mapState('personOptions',['personList']),

        // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
        ...mapGetters('countOptions',['bigSum'])
    },
    methods: {
        // increment() {
        //     this.$store.commit('ADD', this.n)
        // },
        // decrement() {
        //     this.$store.commit('MINUS', this.n)
        // },
        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations
        ...mapMutations('countOptions',{ increment: 'ADD', decrement: 'MINUS' }),
        /* ...mapMutations(['ADD', 'MINUS']), */


        /* incrementOdd() {
            this.$store.dispatch('addOdd', this.n)
        },
        incrementWait() {
            this.$store.dispatch('addWait', this.n)
        }, */
        ...mapActions('countOptions',{ incrementOdd: 'addOdd', incrementWait: 'addWait' }),
        /* ...mapActions(['addOdd','addWait']), */
        print() {
            console.log(this.n)
        }

    },
    mounted() {
        console.log('Count', this.$store)
    },


}
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>