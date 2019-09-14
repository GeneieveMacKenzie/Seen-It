<template>
  <div class="homecomp col-6 border rounded">
    <router-link :to="{name:'profile', params:{id: homeCompProp.authorId._id}}" class='userProfile'>
      {{homeCompProp.authorId.name}}</router-link>
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
      homeComp() {
        return this.$store.state.homeComp;//userProfile
      },
    },
    methods: {
      viewUserProfile() {
        this.$router.push({ name: 'profilecomp', params: { userProfileId: this.authorId._id } })
      }
    }

  }
</script>