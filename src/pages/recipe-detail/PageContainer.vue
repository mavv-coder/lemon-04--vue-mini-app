<template>
  <recipe-detail-page :recipe="recipe" />
</template>

<script lang="ts">
import Vue from "vue";
import { fetchRecipeById } from "../../rest-api/api/recipe";
import { mapRecipeModelToVm } from "./mapper";
import { createEmptyRecipe } from "./viewModel";
import RecipeDetailPage from "./Page.vue";
import { getRecipeById, getFromLocalStorage } from "../../common/helpers";

export default Vue.extend({
  name: "RecipeDetailPageContainer",
  components: { RecipeDetailPage },
  props: { id: String },
  data() {
    return {
      recipe: createEmptyRecipe(),
    };
  },
  beforeMount() {
    const id = Number(this.id || 0);
    const recipes = getFromLocalStorage("recipes");
    getRecipeById(recipes, id)
      .then((recipe) => {
        this.recipe = mapRecipeModelToVm(recipe);
      })
      .catch((error) => console.log(error));

    // To get the recipe from the api
    // fetchRecipeById(id)
    //   .then((recipe) => {
    //     this.recipe = mapRecipeModelToVm(recipe);
    //   })
    //   .catch((error) => console.log(error));
  },
});
</script>
