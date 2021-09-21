<template>
  <div>
    <composition-item-nav-bar
        v-on:fetchCompositionItems="fetchCompositionItems"
        v-on:fetchCompositionItemsOver="fetchCompositionItemOver"
        v-on:newCompositionItem="newCompositionItem"
    ></composition-item-nav-bar>
    <composition-items
        :compositionItems="compositionItems"
        v-on:deleteCompositionItem="deleteCompositionItem"
        v-on:updateCompositionItem="updateCompositionItem"
    ></composition-items>
  </div>
</template>

<script>

import CompositionItemNavBar from "@/app/compositionitem/components/navbar/CompositionItemNavBar";
import CompositionItems from "@/app/compositionitem/components/list/container/CompositionItems";
import CompositionItemService from "../../shared/service/CompositionItem.service";

export default {
  name: 'Composition',
  components: {
    CompositionItemNavBar,
    CompositionItems
  },
  data() {
    return {
      compositionItems: {},
    };
  },
  created() {
    this.fetchCompositionItems();
  },
  methods: {
    fetchCompositionItems: function () {
      CompositionItemService.fetchCompositionItems()
          .then(response => {
            if (response.ok) {
              response.json()
                  .then((data) => {
                    this.compositionItems = data;
                  });
            }
          });
    },
    fetchCompositionItemOver: function () {
      this.compositionItems = CompositionItemService.fetchCompositionItemsOver(this.compositionItems);
    },
    newCompositionItem: function () {
      this.$router.push('/composition-items/new');
    },
    deleteCompositionItem: function (id) {
      CompositionItemService.deleteCompositionItem(id)
      .then(response => {
        CompositionItemService.fetchCompositionItems()
            .then(response => {
              if (response.ok) {
                response.json()
                    .then((data) => {
                      this.compositionItems = data;
                    });
              }
            });
      });
    },
    updateCompositionItem: function (id) {
      this.$router.push(`composition-items/edit/${id}`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
