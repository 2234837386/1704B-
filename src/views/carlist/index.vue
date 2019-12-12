<template>
  <div class="carstyle_page">
    <div class="c_top">全部车型</div>
    <div class="items">
      <Carlist v-for="(item,index) in allList.list" :key="index" :item="item" />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Carlist from "../../components/Carlist";
export default {
  props: {},
  components: {
    Carlist
  },
  data() {
    return {
      carLists: []
    };
  },
  computed: {
    ...mapState({
      allList: state => state.detail.allList
    })
    
  },
  methods: {
    ...mapActions({
      carList: "detail/carList"
    })
  },
  created() {
    // console.log(this.$route.query.SerialID)
    this.carList(this.$route.query.SerialID);
    // this.id = this.$route.query.SerialID;
    // this.$http.get(
    //     `https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${this.id}`
    //   )
    //   .then(res => {
    //     this.list = res.data.data;
    //     // console.log(this.list)
    //     this.carlist = this.list.list;
    //     // console.log(this.carlist)
    //   });
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.carstyle_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee;
  overflow: hidden;
  box-sizing: border-box;
  overflow-y: scroll;
  .c_top {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #09f;
    font-size: 18px;
    background: #fff;
  }
  .items {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: violet;
  }
}
</style>