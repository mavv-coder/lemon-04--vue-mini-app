<template>
  <div class="form-field">
    <v-text-field
      filled
      label="Name"
      :value="recipe.name"
      :rules="[resultRecipeFieldError('name')]"
      @input="(name) => onUpdateRecipe('name', name)"
    />
    <v-text-field
      filled
      label="Time"
      :value="recipe.time"
      :rules="[resultRecipeFieldError('time')]"
      @input="(time) => onUpdateRecipe('time', time)"
    />
    <v-select
      filled
      label="Difficulty"
      :items="difficultyLevels"
      :value="recipe.difficulty"
    ></v-select>
  </div>
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
  data() {
    return {
      difficultyLevels: ["Easy", "Medium", "Difficult"],
    };
  },
  methods: {
    capitalize(x: string) {
      return x.charAt(0).toUpperCase() + x.slice(1);
    },
  },
});
</script>

<style scoped></style>
