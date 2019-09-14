<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <h1>{{profile.name}}</h1>
      </div>
      <div class="row">
        <!-- <ProfileComp v-for="profile in profileComp" :profileCompProp="profile" :key="profile._id" /> -->
        <div class="card" style="width: 18rem;">
          <div class="card-img">
            <img :src="profile.img" alt />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{profile.name}}</h5>
            <p class="card-text">
              {{posts}}
              {{followers}}
              {{following}}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  components: {
    // ProfileComp
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getProfileComp", this.$route.params.id);
    this.$store.dispatch("getProfileById", this.$route.params.id);
  },
  computed: {
    profile() {
      return this.$store.state.profileComp;
    },
    posts() {
      return this.$store.state.posts;
    },
    followers() {
      return this.$store.state.followers;
    },
    following() {
      return this.$store.state.following;
    }
  },
  methods: {}
};
</script>

<style>
</style>