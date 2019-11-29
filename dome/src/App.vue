<template>
    
    <router-view />

</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions(["loadList"])
  },
  created() {
    this.loadList();
  },
  mounted() {}
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  user-select: none;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>