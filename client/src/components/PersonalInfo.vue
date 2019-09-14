<template>
  <div class="personal-info">
    <img class="img-fluid" :src="user.img" alt />
    <h1>{{user.name}}</h1>
  </div>
</template>


<script>
export default {
  name: "personal-info",
  props: ["user"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>