<template>
  <div class="detail"></div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions({
      
    })
  },
  created() {
    console.log(this.$route.params.id);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.detail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>