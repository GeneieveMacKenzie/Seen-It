<template>
  <div class="homecomp col-6 border rounded">
    <h2>{{homeCompProp.authorId.name}}</h2>
    <h2>{{homeCompProp.title}}</h2>
    <h4>{{homeCompProp.body}}</h4>
  </div>
</template>

<script>

  export default {
    name: 'homecomp',
    props: ["homeCompProp"],

    data() {
      return {}
    },
    computed: {
      //   homeComp() {
      //     return this.$store.state.homeComp;
      //   },
    },
    methods: {
      // getHomeComp() {
      //   viewHomeComp()
      //   this.$router.push({
      //     name: 'homecomp',
      //     params: { homecomp: this.homeCompProp._id }
      //   })
      // }
    }

  }
</script>