<template>
  <div class="profilecomp col-6 border rounded">
    <h1>hello</h1>
  </div>
</template>

<script>

  export default {
    name: 'profilecomp',
    props: ["profileCompProp"],

    data() {
      return {}
    },
    computed: {
      //   profileComp() {
      //     return this.$store.state.profileComp;
      //   },
    },
    methods: {
      viewUserProfile() {
        this.$router.push({ name: 'userProfile', params: { userProfileId: this.userProfileProp._id } })
      }
    }

  }
</script>