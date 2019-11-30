<template>
  <div class="floor">
    <p>#</p>
    <p v-for="(item,index) in getzm" :key="index">{{item}}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["getzm"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.floor {
  width: 1.5rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  flex-shrink: 0;
  p {
    width: 100%;
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  }
}
</style>