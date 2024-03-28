<template>
  <MainNavbar/>
  <router-view />
</template>

<script>
import MainNavbar from './components/MainNavbar.vue';

export default {
  components: {
    MainNavbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b9e6f9;
  background-color: #0077b5;
}
</style>