<template>
  <div class="personal-info">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkn0wxT8chcHq4SD_RHbcOe_o2slPsbzdxpGsFaKS4rI6nhCfe"
      class="img-fluid"
    />
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