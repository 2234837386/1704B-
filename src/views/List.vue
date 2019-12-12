<template>
  <div class="listPage">
    <div
      class="p_item"
      v-for="(item,index) in $route.query.count"
      :key="index"
      :data-id="index"
      v-lazy:background-image="$getUrl($secondUrl(index,imageList,$route.query.id))"
    ></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      imageList: state => state.img.imageList
    })
  },
  methods: {},
  created() {},
  mounted() {
    console.log(this.$route.query.count);
  }
};
</script>
<style scoped lang="scss">
.listPage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .p_item {
    width: calc(100% / 3);
    height: 7.5rem;
    padding: 0.1rem;
    background-size: cover;
    box-sizing: border-box;
  }
}
</style>