<template>
  <app-layout>
    <snackbar-component
      v-bind="{ snackbarText, snackbarColor, snackbarState, closeSnackbar }"
    />
    <form-component v-bind="$props" />
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../../common/layouts";
import { FormProps } from "./formProps";
import { FormComponent } from "./components";
import { Recipe, RecipeError } from "./viewModel";
import { SnackbarComponent } from "../../../common/components";

export default Vue.extend({
  name: "RecipeEditPage",
  components: { AppLayout, FormComponent, SnackbarComponent },
  props: {
    recipe: { require: true } as PropOptions<Recipe>,
    recipeError: { required: true },
    onUpdateRecipe: { require: true } as PropOptions<
      (field: string, value: string) => void
    >,
    onSave: { require: true } as PropOptions<() => void>,
    onAddStep: { required: true },
    onRemoveStep: { required: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
    closeSnackbar: { required: true },
    snackbarState: { required: true },
    snackbarColor: { required: true },
    snackbarText: { required: true },
  },
});
</script>
