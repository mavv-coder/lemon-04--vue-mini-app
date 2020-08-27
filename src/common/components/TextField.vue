<template>
  <v-text-field
    filled
    :label="capitalize(field)"
    :value="recipe[field]"
    :rules="[resultRecipeFieldError(field)]"
    @input="(v) => onUpdateRecipe(field, v)"
  />
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../model";

interface Props {
  recipe: PropOptions<Recipe>;
  field: PropOptions<string>;
  resultRecipeFieldError: PropOptions<(field: string) => boolean | string>;
  onUpdateRecipe: PropOptions<(field: string, value: string) => void>;
}

export default Vue.extend({
  name: "TextFieldComponent",
  props: {
    recipe: { required: true },
    field: { required: true },
    resultRecipeFieldError: { required: true },
    onUpdateRecipe: { required: true },
  } as Props,
  methods: {
    capitalize(x: string) {
      return x.charAt(0).toUpperCase() + x.slice(1);
    },
  },
});
</script>

<style scoped></style>
