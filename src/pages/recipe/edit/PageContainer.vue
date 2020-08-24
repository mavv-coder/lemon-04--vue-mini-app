<template>
  <recipe-edit-page
    v-bind="{
      recipe,
      recipeError,
      onUpdateRecipe,
      onAddIngredient,
      onRemoveIngredient,
      onSave,
      onRemoveStep,
      onAddStep,
    }"
  />
</template>

<script lang="ts">
import Vue from "vue";
import RecipeEditPage from "./Page.vue";
import { fetchRecipeById, save } from "../../../rest-api/api/recipe";
import { mapRecipeModelToVm, mapRecipeVmToModel } from "./mapper";
import { createEmptyRecipe, createEmptyRecipeError } from "./viewModel";
import { validations } from "./validations";

export default Vue.extend({
  name: "RecipeEditPageContainer",
  components: { RecipeEditPage },
  props: { id: String },
  data() {
    return {
      recipe: createEmptyRecipe(),
      recipeError: createEmptyRecipeError(),
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
  methods: {
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
          const recipe = mapRecipeVmToModel(this.recipe);
          save(recipe)
            .then((message) => {
              console.log(message);
              this.$router.back();
            })
            .catch((error) => console.log(error));
        } else {
          this.recipeError = {
            ...this.recipeError,
            ...result.fieldErrors,
          };
        }
      });
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
      this.validateRecipeField("step", this.recipe.steps);
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
  },
});
</script>
