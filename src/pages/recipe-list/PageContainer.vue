<template>
  <recipe-list-page
    v-bind="{ searchText, recipes: filteredRecipes, onSearch, deleteRecipe }"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { fetchRecipes } from "../../rest-api/api/recipe";
// import {
//   checkInLocalStorage,
//   getFromLocalStorage,
//   saveInLocalStorage,
//   deleteFromLocalStorage,
// } from "../../../common/helpers";
import { filterRecipesByCommaSeparatedText } from "./business/filterRecipeBusiness";
import { mapRecipeListModelToVm } from "./mapper";
import { Recipe } from "./viewModel";
import RecipeListPage from "./Page.vue";

export default Vue.extend({
  name: "RecipeListPageContainer",
  components: {
    RecipeListPage,
  },
  data() {
    return {
      recipes: [] as Recipe[],
      // favList: [] as Recipe[],
      searchText: "",
    };
  },
  computed: {
    filteredRecipes(): Recipe[] {
      return filterRecipesByCommaSeparatedText(this.recipes, this.searchText);
    },
  },
  created() {
    // if (checkInLocalStorage("recipes")) {
    //   this.recipes = getFromLocalStorage("recipes");
    // } else {
    fetchRecipes()
      .then((recipes) => {
        this.recipes = mapRecipeListModelToVm(recipes);
        // saveInLocalStorage("recipes", recipes);
      })
      .catch((error) => console.log(error));
    // }
    // if (checkInLocalStorage("favList")) {
    //   this.favList = getFromLocalStorage("favList");
    // }
  },
  methods: {
    onSearch(value: string): void {
      this.searchText = value;
    },
    deleteRecipe(id: number): void {
      if (window.confirm("Are you sure to delete this recipe")) {
        const newRecipes = this.recipes.filter((x) => x.id !== id);
        this.recipes = newRecipes;

        // const newRecipes = getFromLocalStorage("recipes").filter(
        //   (x) => x.id !== id
        // );
        // deleteFromLocalStorage("recipes");
        // saveInLocalStorage("recipes", newRecipes);
        // this.recipes = newRecipes;
        // //
        // const newfavList = getFromLocalStorage("favList").filter(
        //   (x) => x.id !== id
        // );
        // deleteFromLocalStorage("favList");
        // saveInLocalStorage("favList", newfavList);
        // this.recipes = newfavList;
      }
    },
  },
});
</script>
