<template>
    <el-main>
        <el-row>
        <el-col>
            <router-link class="router_style" to="/m_1">M_1 Page</router-link>
            <router-link class="router_style" to="/m_2">M_2 Page</router-link>
        </el-col>
    </el-row>
    <el-row style="margin-top: 10%;">
        <el-col>
            <keep-alive include="m_2">
                <router-view></router-view>
            </keep-alive>
        </el-col>
    </el-row>
    </el-main>
</template>

<script>
import { RouterView } from 'vue-router';

// import { Message } from 'element-ui';

export default {
    name: 'message',
    data() {
        return {};
    },
    methods: {},
    mounted() {
    },
    components: { RouterView }
}
</script>

<style scoped>
ul {
    width: 10%;
    margin: 1% auto;
}
.router_style{
    padding: 10px 20px;
    background: rgb(18, 167, 241);
    color: white;
    border-radius: 5px;
    font-weight: bold;
    margin-left: 2%;
    text-decoration:none
}

</style>