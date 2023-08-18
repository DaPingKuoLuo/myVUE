<template>
    <ul>
        <li :style="{ opacity }">VUE</li>
        <li>姓名 <el-input name="name" v-model="name" placeholder="请输入姓名"></el-input></li>
        <li>年龄 <el-input name="age" v-model="age" placeholder="请输入年龄"></el-input></li>
        <li>性别 <el-input name="sex" v-model="sex" placeholder="请输入性别"></el-input></li>
    </ul>
</template>

<script>
export default {
    name: 'm_2',
    data() {
        return {
            name: '',
            age: '',
            sex: '',
            opacity: 1,
        }
    },
   /*  beforeDestroy() {
        console.log('M_2组件即将被销毁了')
        clearInterval(this.timer)
    },
    mounted() {
        this.timer = setInterval(() => {
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
        }, 16);
    }, */
    activated() {
        this.timer = setInterval(() => {
            console.log('@@@@')
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
        }, 16);
    },
    deactivated() {
        clearInterval(this.timer)
    }
}

</script>

<style scoped>
li {
    margin-top: 5%;
}

ul {
    width: 40%;
    margin: auto;
}

.el-input {
    width: 80%;
}
</style>