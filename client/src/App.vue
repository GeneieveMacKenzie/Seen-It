<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <router-link to="/profile"></router-link>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>