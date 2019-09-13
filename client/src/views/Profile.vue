<template>
  <div class="profile">
    <div class="container">
      <div class="row">

        <h1>Seen It</h1>


      </div>
      <div class="row">
        <HomeComp v-for="home in homeComp" :homeCompProp="home" :key="home._id" />
        <div class="card" style="width: 18rem;">

          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import HomeComp from '@/components/HomeComp.vue'
  export default {
    name: "home",
    components: {
      HomeComp
    },
    data() {
      return {};
    },
    mounted() {

      this.$store.dispatch("getHomeComp")
    },
    computed: {
      homeComp() {
        return this.$store.state.homeComp;
      }
    },
    methods: {}
  };
</script>

<style>
</style>