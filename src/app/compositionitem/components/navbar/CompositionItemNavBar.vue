<template>
  <nav class="navbar navbar-light bg-light">
    <form class="form-inline">
      <button class="btn btn-outline-success" type="button" v-on:click="$emit('fetchCompositionItems', $event.target.value)">All</button>
      <button class="btn btn-sm btn-outline-secondary" type="button" v-on:click="$emit('fetchCompositionItemsOver')">Composition over</button>
      <button class="btn btn-sm btn-outline-secondary" type="button" v-on:click="$emit('newCompositionItem')">New</button>
    </form>
  </nav>
</template>

<script>

export default {
  name: "CompositionItemHeader"
}
</script>

<style scoped>

</style>

fetchCompositionItems() {

}