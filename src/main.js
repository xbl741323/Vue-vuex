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
        //注意：如果要操作 store 中的 state 值，只能通过调用 mutations 提供的方法，才能
        //操作对应的数据，不推荐直接操作 state 中的数据，因为，万一导致了数据的紊乱，不能
        //快速定位到错误的原因，因为，每个组件都可能有操作数据的方法；
        increment(state) {
            // 注意：如果要调用 mutations 中的方法，只能使用 this.$store.commit('方法名')
            // 这种调用 mutations 方法的格式，和 this.$emit('父组件中的方法名')很相似
            state.count++
        },
        subtract(state, obj) {
            //注意：motutations 的参数列表中最多支持两个参数，其中，参数1：是state状态，
            //参数2：通过 commit 提交过来的参数（想传多个参数，可以将参数2定义为数组或对象）
            state.count -= (obj.c + obj.d)
        }
    },
    getters: {
        //注意：这里的 getters 只负责对外提供数据，不负责修改数据，如果想要修改 state 中的
        //数据，请去找 mutations
        optCount: function (state) {
            return '当前最新的 count 值是' + state.count
        }
        //经过我们回顾对比，发现 getters 中的方法，和组件中的过滤器比较类似，因为过滤器和
        // getters 都没有修改原数据，都是把数据做了一层包装，提供给了调用者；
        //其次：getters 也和 computed 比较像，只要 state 中的数据发生了变化，那么，如果
        //getters 正好也引用了这个数据，那么，就会立即触发 getters 的重新求值；
    }

})

import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    store //5. 将 vuex 创建的 store 挂载到 VM 实例上，只要挂载到了vm上，任何组件都能
    //使用 store 来存取数据；
})