<template>
  <div id="app">
      <router-link to="/">Перейти к main</router-link>
      <router-link to="/main1">Перейти к main 1</router-link>
      <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
// import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
