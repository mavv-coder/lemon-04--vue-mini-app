<template>
  <v-form>
    <h3>Select name, preparation time and difficulty level for the recipe</h3>
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
        :items="difficultyLevels"
        filled
        :value="recipe.difficulty"
        label="Difficulty"
      ></v-select>
    </div>
    <h3>Select ingredients for the recipe</h3>
    <div class="form-field">
      <v-text-field
        filled
        label="Ingredients"
        placeholder="Add ingredient"
        append-icon="add"
        v-model="ingredient"
        @click:append="handleAddIngredient(ingredient)"
      />
      <v-alert
        :value="!recipeError.ingredients.succeeded"
        color="error"
        outlined
        >{{ recipeError.ingredients.message }}</v-alert
      >
      <ingredient-list-component
        :ingredients="recipe.ingredients"
        :on-remove-ingredient="onRemoveIngredient"
      />
    </div>
    <h3>Select a description for the recipe</h3>
    <div class="form-field">
      <v-textarea
        label="Description"
        filled
        placeholder="Description...."
        rows="10"
        :value="recipe.description"
        :rules="[resultRecipeFieldError('description')]"
        :no-resize="true"
        @input="(value) => onUpdateRecipe('description', value)"
      ></v-textarea>
    </div>
    <h3>Select the preparation steps for the recipe</h3>
    <div class="form-field">
      <v-text-field
        filled
        label="Steps"
        placeholder="Add step"
        append-icon="add"
        v-model="step"
        @click:append="handleAddStep(step)"
      />

      <step-list-component
        :steps="recipe.steps"
        :on-remove-step="onRemoveStep"
      />

      <v-alert :value="!recipeError.steps.succeeded" color="error" outlined>{{
        recipeError.steps.message
      }}</v-alert>
    </div>
    <v-btn type="button" color="success" @click.prevent="onSave">Save</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import IngredientListComponent from "./IngredientList.vue";
import StepListComponent from "./StepList.vue";
import { FormProps } from "../formProps";

export default Vue.extend({
  name: "FormComponent",
  components: { IngredientListComponent, StepListComponent },
  props: {
    recipe: { required: true },
    recipeError: { required: true },
    onUpdateRecipe: { required: true },
    onSave: { required: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
    onAddStep: { required: true },
    onRemoveStep: { required: true },
  } as FormProps,
  data() {
    return {
      ingredient: "",
      step: "",
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
      if (this.checkifIngredientIsValid()) {
        this.onAddIngredient(ingredient);
        this.ingredient = "";
      }
    },

    checkifIngredientIsValid(): boolean {
      return this.ingredient === "" ||
        this.ingredient === undefined ||
        this.ingredient === null
        ? false
        : true;
    },
    checkifStepIsValid(): boolean {
      return this.step === "" || this.step === undefined || this.step === null
        ? false
        : true;
    },
    handleAddStep(step: string): void {
      if (this.checkifStepIsValid()) {
        this.onAddStep(step);
        this.step = "";
      }
    },
  },
});
</script>

<style scoped>
.form-field {
  border: 1px solid #424242;
  padding: 25px 25px 0 25px;
  margin-bottom: 40px;
}
h3 {
  color: #424242;
}
</style>
