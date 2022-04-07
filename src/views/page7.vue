<template>
  <div>传来的值：</div>
  <div>
    {{ this.$route.params.name }}
    {{ this.$route.params.value }}
    {{ this.$route.params.num }}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var nob = this.$route.params.name;
    console.log("这里收到了：" + nob);
  },
};
</script>

<style scoped lang="less">
</style>