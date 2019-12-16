<template>
  <div class="floor">
    <a href="#A">#</a>
    <a :href="`#${item.lets}`" v-for="(item,index) in homeList" :key="index">{{item.lets}}</a>
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
      homeList: state => state.home.homeList
    })
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.floor {
  width: 1.5rem;
  position: fixed;
  right: 0.1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  a {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.01rem 0;
    box-sizing: border-box;
    font-size: 1rem;
    color: #a1a1a1;
    font-size: 1rem;
    list-style: none;
    color: #aaa;
  }
}
</style>