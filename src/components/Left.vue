  <template>
      <div id="mask" :class="{active:isShow}">
            {{cityyData}}
        </div>
  </template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
     props: {
    isShow: {
      type: Boolean
    }
  },
  computed: {
      ...mapState({
          cityData:state=> state.city.cityList,
      })
  },
  methods: {
      ...mapActions({
          getCityList:'city/getCityList'
      })
  },
  mounted(){
        this.getCityList()
    }
}
</script>

<style lang='scss' scoped>
#mask {
  width: 80%;
  height: 100%;
  background: #ffffff;
  position: fixed;
  right: 0;
  bottom: 0;
  overflow: hidden;
  overflow-y: auto;
  transform: translateX(100%);
  transition: all 2s ease;
  &.active {
    transform: translateX(0%);
  }
}
</style>