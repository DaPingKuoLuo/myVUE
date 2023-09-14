<template>
    <div>
        <h1>我是子组件</h1>
        <slot name="myslot" :data="list" :text="text"></slot>
        <el-button @click="print">子组件打印</el-button>
    </div>
</template>

<script>
export default {
    name: 'ScopeChild',
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            text:'传递的字符数据'
        }
    },
    methods: {
        print(){
            this.$emit('print')
            console.log(this.$slots)
        }
    }
}
</script>

<style scoped></style>