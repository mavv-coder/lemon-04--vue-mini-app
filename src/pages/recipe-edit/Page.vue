<template>
  <app-layout>
    <snackbar-component
      v-bind="{ snackbarText, snackbarColor, snackbarState, closeSnackbar }"
    />
    <form-component
      v-bind="{
        recipe,
        recipeError,
        onUpdateRecipe,
        onRemoveIngredient,
        onAddIngredient,
        onRemoveStep,
        onAddStep,
        onSave,
        navigateBack,
      }"
    />
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../common/layouts";
import { SnackbarComponent } from "../../common/components";
import { Recipe, RecipeError } from "./viewModel";
import { FormComponent } from "./components";

interface Props {
  recipe: PropOptions<Recipe>;
  recipeError: PropOptions<RecipeError>;
  onUpdateRecipe: PropOptions<(field: string, value: string) => void>;
  onRemoveIngredient: PropOptions<(ingredient: string) => void>;
  onAddIngredient: PropOptions<(ingredient: string) => void>;
  onRemoveStep: PropOptions<(step: string) => void>;
  onAddStep: PropOptions<(step: string) => void>;
  onSave: PropOptions<() => void>;
  navigateBack: PropOptions<() => void>;
  closeSnackbar: PropOptions<(value: boolean) => void>;
  snackbarState: PropOptions<boolean>;
  snackbarColor: PropOptions<string>;
  snackbarText: PropOptions<string>;
}

export default Vue.extend({
  name: "RecipeEditPage",
  components: { AppLayout, FormComponent, SnackbarComponent },
  props: {
    recipe: { required: true },
    recipeError: { required: true },
    onUpdateRecipe: { required: true },
    onAddStep: { required: true },
    onRemoveStep: { required: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
    navigateBack: { required: true },
    closeSnackbar: { required: true },
    snackbarState: { required: true },
    snackbarColor: { required: true },
    snackbarText: { required: true },
    onSave: { required: true },
  },
});
</script>
