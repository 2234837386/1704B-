import Vue from 'vue'
import Vuex from 'vuex'
//引入子模块
import detail from './module/detail'
import creareLogger from 'vuex/dist/logger'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {//拆分store，把vuex细化封装
    detail
  },
 plugins:[creareLogger()]
})
