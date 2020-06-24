import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos' // 引入todos

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos
  }
})
// 本来可以把state和actions放下面的，为了美观和维护，就重新创建一个modules文件夹
