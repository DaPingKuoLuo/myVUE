<template>
    <div>
        <h1>我是父组件</h1>
        <ScopeChild  #myslot="{data,text}">
            {{ data }}-{{ text }}
        </ScopeChild>
        <br>
        <el-button @click="print">打印</el-button>
    </div>
</template>

<script>
import ScopeChild from './ScopeChild.vue'
export default {
    name: 'Scope',
    components: { ScopeChild },
    data() {
        return {
            title:'标题'
        }
    },
    methods: {
        print(){
            console.log(eval('2 + 2'))
            console.log(new String('2 + 2'))
        }
    }
}
</script>

<style scoped></style>