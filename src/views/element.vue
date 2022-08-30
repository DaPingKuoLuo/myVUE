<template>
  <main>
    <el-row>
      <el-col :span="24">
        <div class="area">
          <v-chart class="echarts" :option="option" @click="getDate"/>
        </div>
      </el-col>
    </el-row>
  </main>
</template>

<script>
import VChart, {THEME_KEY} from "vue-echarts";
import * as echarts from 'echarts/core';
import {ToolboxComponent, LegendComponent} from 'echarts/components';
import {PieChart} from 'echarts/charts';
import {LabelLayout} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';

echarts.use([
  ToolboxComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);


export default {
  name: "elements",
  components: {
    'v-chart': VChart,
  },
  // provide: {
  //   [THEME_KEY]: 'dark'
  // },

  data() {
    return {
      option: {
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              {value: 40, name: 'rose 1'},
              {value: 38, name: 'rose 2'},
              {value: 32, name: 'rose 3'},
              {value: 30, name: 'rose 4'},
              {value: 28, name: 'rose 5'},
              {value: 26, name: 'rose 6'},
              {value: 22, name: 'rose 7'},
              {value: 18, name: 'rose 8'}
            ]
          }
        ]
      }
    }
  },
  created() {//自动渲染数据

  },
  methods: {//方法
    getDate(value) {
      console.log(value.name, value.value)
      this.$http.get('api/getImages?type=car&page=0&size=10').then(res=>{
        console.log(res.data.result.list)
      })
    }
  },
}

</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.area {
  width: 80%;
  height: 80vh;
  background-size: 100% 100%;
  padding: 8%;
  margin-left: 5%;
}
</style>
