<template>
  <div>
    <div>Composition Items:</div>
    <div>
      <ul>
        <div class="container overflow-auto">
          <div class="container">
            <div>
              <table class="table container-sm">
                <tr class="alert-info">
                  <th>name</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>available</th>
                  <th>description</th>
                  <th></th>
                  <th></th>
                </tr>
                <composition-item
                    v-for="compositionItem in compositionItems"
                    :key="compositionItem.id"
                    :compositionItem="compositionItem"

                    v-on:deleteCompositionItem="$emit('deleteCompositionItem', compositionItem.id)"
                    v-on:updateCompositionItem="$emit('updateCompositionItem', compositionItem.id)"
                ></composition-item>
              </table>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>

import CompositionItem from "@/app/compositionitem/components/list/components/CompositionItem";

export default {
  name: "CompositionItems",
  components: {CompositionItem},
  props: {
    compositionItems: {}
  }
}
</script>

<style scoped>

</style>