<template>
  <!-- <recipe-edit-page :recipe="recipe" /> -->
  <h1>detail</h1>
</template>

<script lang="ts">
import Vue from "vue";
import RecipeEditPage from "./Page.vue";
import { fetchRecipeById } from "../../../rest-api/api/recipe";
import { mapRecipeModelToVm } from "./mapper";
import { createEmptyRecipe } from "./viewModel";

export default Vue.extend({
  name: "RecipeDetailPageContainer",
  components: { RecipeEditPage },
  props: { id: String },
  data() {
    return {
      recipe: createEmptyRecipe(),
    };
  },
  beforeMount() {
    const id = Number(this.id || 0);
    fetchRecipeById(id)
      .then((recipe) => {
        this.recipe = mapRecipeModelToVm(recipe);
      })
      .catch((error) => console.log(error));
  },
});
</script>
