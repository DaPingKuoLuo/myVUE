<template>
  <el-main>
    <el-row>
      <el-col :span="24" align="left">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-select filterable v-show="select" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
        <el-button type="primary" @click="Update">确定</el-button>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: "FormPage",
  data() {
    return {
      input: '',
      options: [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'}
      ],
      value: '',
      select: true,
      i: 6,
    }
  },
  created() {//自动渲染数据

  },
  methods: {//方法
    Update() {
      if (this.input !== '') {
        this.options.push({value: '选项' + this.i, label: this.input})
        this.i++
      }
    }
  },
}
</script>

<style scoped>
.el-input {
  width: 20%;
}

.el-select {
  margin-left: 10px;
}

.el-button {
  margin-left: 10px;
}
</style>
