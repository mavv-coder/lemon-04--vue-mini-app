<template>
  <v-form>
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
      :items="difficultyLevels"
      filled
      :value="recipe.difficulty"
      label="Difficulty"
    ></v-select>

    <v-text-field
      filled
      label="Ingredients"
      placeholder="Add ingredient"
      append-icon="add"
      v-model="ingredient"
      @click:append="handleAddIngredient(ingredient)"
    />

    <ingredient-list-component
      :ingredients="recipe.ingredients"
      :on-remove-ingredient="onRemoveIngredient"
    />

    <v-alert
      :value="!recipeError.ingredients.succeeded"
      color="error"
      outlined
      >{{ recipeError.ingredients.message }}</v-alert
    >

    <v-textarea
      label="Description"
      filled
      placeholder="Description...."
      rows="10"
      :value="recipe.steps"
      :rules="[resultRecipeFieldError('description')]"
      :no-resize="true"
      @input="(value) => onUpdateRecipe('description', value)"
    ></v-textarea>

    <v-btn type="button" color="success" @click.prevent="onSave">Save</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import IngredientListComponent from "./IngredientList.vue";
import { FormProps } from "../formProps";

export default Vue.extend({
  name: "FormComponent",
  components: { IngredientListComponent },
  props: {
    recipe: { required: true },
    recipeError: { required: true },
    onUpdateRecipe: { required: true },
    onSave: { required: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
  } as FormProps,
  data() {
    return {
      ingredient: "",
      difficultyLevels: ["Easy", "Medium", "Difficult"],
    };
  },
  // computed: {
  //   resultRecipeTitleError(): boolean | string {
  //     return this.recipeError.name.succeeded || this.recipeError.name.message;
  //   },
  //   resultRecipeDescriptionError(): boolean | string {
  //     return (
  //       this.recipeError.description.succeeded ||
  //       this.recipeError.description.message
  //     );
  //   },
  // },
  methods: {
    resultRecipeFieldError(field: string): boolean | string {
      return (
        this.recipeError[field].succeeded || this.recipeError[field].message
      );
    },
    handleAddIngredient(ingredient: string): void {
      if (this.checkifIngredientIsValid()) this.onAddIngredient(ingredient);
    },

    checkifIngredientIsValid(): boolean {
      return this.ingredient === "" ||
        this.ingredient === undefined ||
        this.ingredient === null
        ? false
        : true;
    },
  },
});
</script>
