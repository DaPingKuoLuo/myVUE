<template>
    <div>
        <h1>当前求和为:{{ sum }}</h1>
        <h2>当前求和放大10倍后为:{{ bigSum }}</h2>
        <h2>我在{{ school }}, 学习{{ subject }}</h2>
        <el-select v-model="n" @change="print">
            <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
        <el-button type="primary" @click="increment">+</el-button>
        <el-button type="primary" @click="decrement">-</el-button>
        <el-button type="primary" @click="incrementOdd">当前求和为奇数再加</el-button>
        <el-button type="primary" @click="incrementWait">等一等再加</el-button>
        <el-button type="primary" @click="print">打印</el-button>
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    name: 'Count',
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
        /* sum() {
            return this.$store.state.sum
        },
        school() {
            return this.$store.state.school
        },
        subject() {
            return this.$store.state.subject
        }, */
        
        // 借助mapState生成计算属性，从state中读取数据（对象写法）
        /* ...mapState({sum:'sum',school:'school',subject:'subject'}), */

        // 借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(['sum','school','subject']),
        /* *********************************** */
        /* bigSum() {
            return this.$store.getters.bigSum
        }, */

        // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
        /* ...mapGetters({bigSum:'bigSum'}), */

        // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
        ...mapGetters(['bigSum'])
    },
    methods: {
        /* increment() {
            this.$store.dispatch('add',this.n)
        },
        decrement() {
            this.$store.dispatch('minus',this.n)
        }, */
        increment() {
            this.$store.commit('ADD', this.n)
        },
        decrement() {
            this.$store.commit('MINUS', this.n)
        },
        incrementOdd() {
            this.$store.dispatch('addOdd', this.n)
        },
        incrementWait() {
            this.$store.dispatch('addWait', this.n)
        },
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