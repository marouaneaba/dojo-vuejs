<template>
  <div>
    <nav-bar></nav-bar>
    <div class="alert-danger">
      <p>{{nameMessageError}}</p>
      <p>{{priceMessageError}}</p>
      <p>{{quantityMessageError}}</p>
    </div>

    <div>

      <div class="form-group">
        <label for="nameInput">Name</label>
        <input v-model="compositionItem.name"  type="text" class="form-control" id="nameInput" placeholder="Name">
      </div>

      <div class="form-group">
        <label for="priceInput">Price</label>
        <input v-model="compositionItem.price"  type="number" class="form-control" id="priceInput" placeholder="Price">
      </div>

      <div class="form-group">
        <label for="quantityInput">Quantity</label>
        <input v-model="compositionItem.quantity"  type="number" class="form-control" id="quantityInput" placeholder="Quantity">
      </div>

      <div class="form-group">
        <label class="form-check-label" for="recipeTextArea">Recipe</label>
        <textarea v-model="compositionItem.recipe" class="form-control" id="recipeTextArea" rows="3"></textarea>
      </div>

      <br/>
      <a class="btn btn-primary" v-on:click="submit">Submit</a>

      <div>
        {{compositionItem}}
      </div>

    </div>
  </div>
</template>

<script>

import CompositionItemService from "../../../shared/service/CompositionItem.service";
import NavBar from "@/app/shared/components/navbar/NavBar";

export default {
  name: "CompositionItemEdit",
  components: {NavBar},
  data()  {
    return {
      nameMessageError: null,
      priceMessageError: null,
      quantityMessageError: null,
      compositionItem: {}
    };
    },
  methods: {
    submit: function() {
      this.checkCompositionItem(this.compositionItem);
      CompositionItemService.updateCompositionItem(this.$route.params.id, this.compositionItem)
      .then(response => {
        if(response.ok) {
          this.$router.push('/home');
        }
      })
    },
    checkCompositionItem(compositionItem) {
      if(!compositionItem.name) {
        this.nameMessageError = "Name should not be empty ";
      }
      if(!compositionItem.price) {
        this.priceMessageError = "Price should not be empty ";
      }
      if(!compositionItem.quantity) {
        this.quantityMessageError = "Quantity should not be empty ";
      }
    }
  }
}
</script>

<style scoped>

</style>