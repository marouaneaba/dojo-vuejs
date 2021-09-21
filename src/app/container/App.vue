<template>
  <nav-bar></nav-bar>
  <composition-item msg="Welcome to Your Vue.js App"/>
</template>

<script>
import CompositionItem from '../compositionitem/container/Composition-item.vue'
import NavBar from "@/app/shared/components/navbar/NavBar";

export default {
  name: 'App',
  components: {
    CompositionItem,
    NavBar
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
