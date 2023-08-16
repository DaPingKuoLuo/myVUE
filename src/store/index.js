// 该文件用于创建vuex最核心的部分 store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 求和功能相关的配置
const countOptions = {
    namespaced: true,
    // 准备 actions 用于响应组件中的动作
    actions: {
        addOdd(context, value) {
            if (context.state.sum % 2) {
                console.log('actions中的addOdd被调用了',)
                context.commit('ADDODD', value)
            }
        },
        addWait(context, value) {
            setTimeout(() => {
                console.log('actions中的addWait被调用了',)
                context.commit('ADDWAIT', value)
            }, 2000)
        },
    },
    // 准备 mutations 用于操作数据 (state)
    mutations: {
        ADD(state, value) {
            console.log('mutations中的ADD被调用了')
            state.sum += value
        },
        MINUS(state, value) {
            console.log('mutations中的MINUS被调用了')
            state.sum -= value
        },
        ADDODD(state, value) {
            console.log('mutations中的ADDODD被调用了')
            state.sum += value
        },
        ADDWAIT(state, value) {
            console.log('mutations中的ADDWAIT被调用了')

            state.sum += value
        },
    },
    // 准备 state 用于存储数据
    state: {
        sum: 0,
        school: '东北石油大学',
        subject: '人工智能',
    },
    // 准备 getters 用于对 state 中的数据进行加工
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}

// 人员管理相关的配置
const personOptions = {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            }else{
                alert('添加的人必须姓王！！！')
            }
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            console.log('mutations中的ADD_PERSON被调用了')
            state.personList.unshift(personObj)
        }
    },
    state: {
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
}

export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }

})