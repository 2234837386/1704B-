# pact

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### home 首页 
    1.功能拆分：
        楼层、渲染品牌和车款类型、弹窗动画
    2.功能的实现：
        楼层：通过touch事件
        渲染车系品牌和车款类型：对数据的axios二次处理
        弹窗动画：利用transition

### Detail 详情页 
    1.通过接收首页的SerialID，渲染详情页面，在渲染详情列表的时候，在Vuex里将数据的汽车排量、功率进行排序，
    并且将相同的数据合并之后在进行渲染；
    2.点击详情页的banner图跳到图片页：
        车系图片列表渲染，分页的渲染
        图片用Better-scroll,上拉加载，下拉刷新
        用Vant ，点击图片进行轮播，切换下一张
    3.车系颜色的渲染，点击颜色图片列表的颜色改变
    4.车款的全部类型
    5.点击询问低价蓝色跳到表单页，把守条数据渲染
    6.点击每个列表的询问低价将相应的数据渲染
### Cart  车系报价页面
1.姓名手机号的正则验证：
    正则验证，判断表单里面的信息，点击详情页将所需参数已对象的形式传过来
2.城市二级列表的渲染
3.根据城市的ip定位渲染选择报价
### 组件的实现效果
Carlist:车款列表
CarYear：表单页的车款列表2
Left:全国城市列表
Up：二级城市列表
Serviceimg：图片列表

