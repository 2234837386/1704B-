<template>
  <div class="App">
    <router-view />
  </div>
</template>
<script>
export default {
  props:{

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
  font-weight: normal;
  font-style: normal;
  user-select: none;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;

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