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
              posts: {{posts.length}}
              followers: {{followers.length}}
              following: {{following.length}}
            </p>
            <button
              @click="toggleFollowing()"
              class="btn btn-primary"
            >{{amIFollowing ? "Un Follow" : "Follow"}}</button>
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
    me() {
      return this.$store.state.user;
    },
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
    },
    amIFollowing() {
      let following = this.followers.find(f => f.follower._id == this.me._id);
      return following ? true : false;
    }
  },
  methods: {
    toggleFollowing() {
      if (this.amIFollowing) {
        //unfollow
        this.$store.dispatch("unfollowUser", this.profile._id);
      } else {
        //follow
        this.$store.dispatch("followUser", this.profile._id);
      }
    }
  }
};
</script>

<style>
</style>