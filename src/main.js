//入口文件
import Vue from 'vue'
//配置vuex的步骤
//1. 运行npm i vuex -S
//2. 导入包
import Vuex from 'vuex'
//3. 注册 Vuex 到vue中
Vue.use(Vuex)
//4. new Vuex.store()实例，得到一个数据仓储对象
var store = new Vuex.Store({
    state: {
        //大家可以把 state 想象成组件中的 data ,专门用来存储数据的
        //如果在组件中，想要访问 store 中的数据，只能通过 this.$store.state.***来访问
        count: 0
    },
    mutations: {
        //类似于组件中的 methods
    }
})

import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    store //5. 将 vuex 创建的 store 挂载到 VM 实例上，只要挂载到了vm上，任何组件都能
    //使用 store 来存取数据；
})