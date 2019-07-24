import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 默认导出Vuex接口
export default new Vuex.Store({
    // 存储的公共对象
    state: {
        name: '张',
        num: 10,
        data:20,
    },
    // 定义一个方法改变name
    mutations: {
        changeanme(state, msg) {
            state.name = msg
        },
        numAdd(state,num){
            state.num += num;
        }
    },
    actions: {
        callAdd(store,num){
            store.commit('numAdd',num)
        }
    },
    getters:{
        callCheng(state){
            state.data *= 2;
        }
    }
})