<template>
  <tr>
    <td>{{compositionItem.name}}</td>
    <td>{{compositionItem.price}} <span>€</span></td>
    <td>{{compositionItem.quantity}}</td>
    <td v-if="compositionItem.quantity == 0">NON</td>
    <td v-if="compositionItem.quantity > 0">YES</td>
    <td>{{compositionItem.recipe}}</td>

    <td>
      <button class="btn btn-outline-danger" v-on:click="$emit('deleteCompositionItem')">Delete</button>
    </td>
    <td>
      <button class="btn btn-sm btn-outline-info" v-on:click="$emit('updateCompositionItem')">update</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CompositionItem',
  props: {
    compositionItem: {}
  }
}
</script>

<style scoped>

</style>