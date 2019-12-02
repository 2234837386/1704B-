<template>
<<<<<<< HEAD

    <router-view/>

=======
    <router-view/>
>>>>>>> 13cc49a2a7f5f0c090af92652918fd2a034545af
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