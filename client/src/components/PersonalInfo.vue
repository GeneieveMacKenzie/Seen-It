<template>
  <div class="personal-info">
    <img class="img-fluid" :src="user.img" alt />
    <h1>{{user.name}}</h1>
    <h3>Following: {{userFollowing.following}}</h3>
    <h4>Followers: {{userFollowing.follower}}</h4>
  </div>
</template>


<script>
export default {
  name: "personal-info",
  props: ["user", "userFollowing"],
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