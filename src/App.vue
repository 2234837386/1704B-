<template>
  <div class="App">
    <router-view />
  </div>
</template>
<script>
export default {
  props: {},
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
<style  lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  user-select: none;
  box-sizing: border-box;
}
html,
body,
.App {
  width: 100%;
  height: 100%;
}
.App {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>