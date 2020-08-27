<template>
  <recipe-add-new-page
    v-bind="{
      recipe,
      recipeError,
      onUpdateRecipe,
      onAddIngredient,
      onRemoveIngredient,
      onSave,
      closeSnackbar,
      onRemoveStep,
      onAddStep,
      snackbarState,
      snackbarColor,
      snackbarText,
    }"
  />
</template>

<script lang="ts">
import Vue from "vue";
import RecipeAddNewPage from "./Page.vue";
import { fetchRecipeById, save } from "../../rest-api/api/recipe";
import { mapRecipeModelToVm, mapRecipeVmToModel } from "./mapper";
import { createEmptyRecipe, createEmptyRecipeError } from "./viewModel";
import { validations } from "./validations";
import { Recipe } from "../../rest-api/model";
import { getFromLocalStorage, saveInLocalStorage } from "../../common/helpers";
// import {
//   saveInLocalStorage,
//   deleteFromLocalStorage,
//   getFromLocalStorage,
// } from "../../../common/helpers";

export default Vue.extend({
  name: "RecipeAddNewPageContainer",
  components: { RecipeAddNewPage },
  props: { id: String },
  data() {
    return {
      recipe: createEmptyRecipe(),
      recipeError: createEmptyRecipeError(),
      snackbarState: false,
      snackbarColor: "",
      snackbarText: "",
    };
  },

  methods: {
    closeSnackbar(v: boolean): void {
      this.snackbarState = v;
    },
    onUpdateRecipe(field: string, value: string) {
      this.recipe = {
        ...this.recipe,
        [field]: value,
      };
      this.validateRecipeField(field, value);
    },
    onSave() {
      validations.validateForm(this.recipe).then((result) => {
        if (result.succeeded) {
          this.recipe.id = this.generateId();
          const newRecipes = getFromLocalStorage("recipes");
          newRecipes.push(this.recipe);
          saveInLocalStorage("recipes", newRecipes);
          // const recipe = mapRecipeVmToModel(this.recipe);
          // save(recipe)
          //   .then((message) => {
          this.$router.back();
          //     // this.saveRecipeToLocalStorage(recipe);
          //   })
          //   .catch((error) => {
          //     this.showSnackbarError(error);
          //   });
        } else {
          this.showSnackbarError("");
          this.recipeError = {
            ...this.recipeError,
            ...result.fieldErrors,
          };
        }
      });
    },
    generateId(): number {
      return Math.ceil(Math.random() * 75433) + Math.ceil(Math.random() * 224);
    },
    onAddIngredient(ingredient: string) {
      this.recipe = {
        ...this.recipe,
        ingredients: [...this.recipe.ingredients, ingredient],
      };
      this.validateRecipeField("ingredients", this.recipe.ingredients);
    },
    onAddStep(step: string) {
      this.recipe = {
        ...this.recipe,
        steps: [...this.recipe.steps, step],
      };
      this.validateRecipeField("steps", this.recipe.steps);
    },
    onRemoveIngredient(ingredient: string) {
      this.recipe = {
        ...this.recipe,
        ingredients: this.recipe.ingredients.filter(
          (item) => item !== ingredient
        ),
      };
      this.validateRecipeField("ingredients", this.recipe.ingredients);
    },
    onRemoveStep(step: string) {
      this.recipe = {
        ...this.recipe,
        steps: this.recipe.steps.filter((item) => item !== step),
      };
      this.validateRecipeField("steps", this.recipe.steps);
    },
    validateRecipeField(field, value) {
      validations
        .validateField(field, value)
        .then((result) => this.updateRecipeError(field, result));
    },
    updateRecipeError(field, result) {
      this.recipeError = {
        ...this.recipeError,
        [field]: result,
      };
    },
    showSnackbarError(msg: string) {
      msg
        ? (this.snackbarText = msg)
        : (this.snackbarText = "Check the form again, please");
      this.snackbarColor = "error";
      this.snackbarState = true;
      setTimeout(() => {
        this.snackbarState = false;
      }, 5000);
    },
    // saveRecipeToLocalStorage(recipe: Recipe): void {
    //   const recipes = getFromLocalStorage("recipes");
    //   const newRecipes = recipes.map((x) => (x.id === recipe.id ? recipe : x));
    //   deleteFromLocalStorage("recipes");
    //   saveInLocalStorage("recipes", newRecipes);
    // },
  },
});
</script>
