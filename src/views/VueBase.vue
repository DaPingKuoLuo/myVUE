<template>
    <div>
        <Scope />
    </div>
</template>

<script>
import Vue from 'vue'
import Scope from '@/components/Scope'
export default {
    name: 'VueBase',
    components: { Scope },
    data() {
        return {
            person: {
                name: '张三',
                sex: '男',
                hobby: ['抽烟', '喝酒', '烫头']
            }
        }
    },
    methods: {
        changeInfo() {
            // 直接修改数组数据或者给对象添加属性方法不管用
            /* this.person.hobby[0] = '跳舞'
            this.person.age=18 */

            // 调用数组方法和内置对象方法
            this.person.hobby.splice(0, 1, '跳舞')
            this.$set(this.person, 'age', 18)
            Vue.set(this.person, 'height', 182)
            console.log(this.person);
        }
    }
}
</script>

<style  scoped></style>