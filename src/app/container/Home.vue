<template>
  <div>
    <nav-bar></nav-bar>
    <composition/>
  </div>
</template>

<script>
import Composition from "@/app/compositionitem/container/Composition";
import NavBar from "@/app/shared/components/navbar/NavBar";

export default {
  name: "Home",
  components: {
    Composition,
    NavBar
  }
}
</script>

<style scoped>

</style>