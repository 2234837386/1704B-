<template>
  <div class="home">{{list}}</div>
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
    ...mapState(["list"])
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>