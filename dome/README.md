懒加载：import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件
 
Vue.use(VueLazyload)
 
// 或者添加VueLazyload 选项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
 
new Vue({
  el: 'body',
  components: {
    App
  }
})
在入口文件添
————————————————
版权声明：本文为CSDN博主「岳小哥」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/yanby921005/article/details/80257661