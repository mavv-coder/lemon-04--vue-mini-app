<template>
  <v-form ref="form" v-model="isFormValid">
    <h3>Select name, preparation time and difficulty level for the recipe</h3>
    <div class="form-field">
      <v-file-input
        @change="handleFileInput"
        label="Upload image"
      ></v-file-input>
      <!-- <v-text-field
        filled
        label="Image url"
        :value="recipe.imgUrl"
        :rules="[resultRecipeFieldError('imgUrl')]"
        @input="(imgUrl) => onUpdateRecipe('imgUrl', imgUrl)"
      /> -->
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
        :rules="[resultRecipeFieldError('difficulty')]"
        @input="(difficulty) => onUpdateRecipe('difficulty', difficulty)"
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
      <v-alert :value="!recipeError.steps.succeeded" color="error" outlined>{{
        recipeError.steps.message
      }}</v-alert>
      <step-list-component
        :steps="recipe.steps"
        :on-remove-step="onRemoveStep"
      />
    </div>
    <div class="btn-container">
      <v-btn type="button" color="error" @click.prevent="navigateToListPage"
        >Cancel</v-btn
      >
      <v-btn type="button" color="success" @click.prevent="handleOnSave"
        >Save</v-btn
      >
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { baseRoutes } from "../../../router";
import IngredientListComponent from "./IngredientList.vue";
import StepListComponent from "./StepList.vue";
import { FormProps } from "../formProps";

interface Refs {
  $refs: {
    form: HTMLFormElement;
  };
}

export default (Vue as VueConstructor<Vue & Refs>).extend({
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
    handleFileInput: { required: true },
  } as FormProps,
  data() {
    return {
      isFormValid: true,
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
    navigateToListPage() {
      this.$router.push(baseRoutes.recipe);
    },
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
    handleOnSave() {
      this.$refs.form.validate();
      this.onSave();
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

.btn-container {
  display: flex;
  justify-content: center;
}

.btn-container button {
  margin: 0 10px;
}
</style>
