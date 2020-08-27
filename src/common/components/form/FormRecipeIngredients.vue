<template>
  <div class="form-field">
    <v-text-field
      filled
      label="Ingredients"
      placeholder="Add ingredient"
      append-icon="add"
      :value="ingredient"
      @input="(x) => handleIngredientValue(x)"
      @click:append="handleAddIngredient(ingredient)"
    />
    <v-alert
      :value="!recipeError.ingredients.succeeded"
      color="error"
      outlined
      >{{ recipeError.ingredients.message }}</v-alert
    >
    <template v-for="(ingredient, index) in recipe.ingredients">
      <v-chip outlined class="ma-2" :key="`${ingredient}_${index}`">
        {{ ingredient }}
        <v-icon right @click="() => onRemoveIngredient(ingredient)"
          >close</v-icon
        >
      </v-chip>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe, RecipeError } from "../../model";

interface Props {
  recipe: PropOptions<Recipe>;
  ingredient: PropOptions<string>;
  recipeError: PropOptions<RecipeError>;
  handleAddIngredient: PropOptions<(ingredient: string) => void>;
  onRemoveIngredient: PropOptions<(ingredient: string) => void>;
  handleIngredientValue: PropOptions<(ingredient: string) => void>;
}

export default Vue.extend({
  name: "FormRecipeIngredientsComponent",
  props: {
    recipe: { required: true },
    ingredient: { required: true },
    recipeError: { required: true },
    handleAddIngredient: { required: true },
    onRemoveIngredient: { required: true },
    handleIngredientValue: { required: true },
  } as Props,
});
</script>

<style scoped></style>
