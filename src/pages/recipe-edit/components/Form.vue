<template>
  <v-form ref="form" v-model="isFormValid">
    <form-recipe-name-component
      field="time"
      v-bind="{ onUpdateRecipe, resultRecipeFieldError, recipe }"
    />
    <form-recipe-ingredients-component
      v-bind="{
        recipe,
        ingredient,
        recipeError,
        handleAddIngredient,
        onRemoveIngredient,
        handleIngredientValue,
      }"
    />
    <form-recipe-description-component
      v-bind="{ onUpdateRecipe, resultRecipeFieldError, recipe }"
    />
    <form-recipe-steps-component
      v-bind="{
        recipe,
        step,
        recipeError,
        handleAddStep,
        onRemoveStep,
        handleStepValue,
      }"
    />
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
import {
  FormRecipeNameComponent,
  FormRecipeIngredientsComponent,
  FormRecipeDescriptionComponent,
  FormRecipeStepsComponent,
} from "../../../common/components";

interface Refs {
  $refs: {
    form: HTMLFormElement;
  };
}

export default (Vue as VueConstructor<Vue & Refs>).extend({
  name: "FormComponent",
  components: {
    FormRecipeNameComponent,
    FormRecipeIngredientsComponent,
    FormRecipeDescriptionComponent,
    FormRecipeStepsComponent,
    // IngredientListComponent,
    StepListComponent,
  },
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
      isFormValid: true,
      ingredient: "",
      step: "",
      // difficultyLevels: ["Easy", "Medium", "Difficult"],
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
    handleIngredientValue(value: string): void {
      this.ingredient = value;
    },
    handleStepValue(value: string): void {
      this.step = value;
    },
    navigateToListPage() {
      this.$router.back();
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
.btn-container {
  display: flex;
  justify-content: center;
}

.btn-container button {
  margin: 0 10px;
}
</style>
