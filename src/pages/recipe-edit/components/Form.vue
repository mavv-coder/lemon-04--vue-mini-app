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
    <form-recipe-buttons-component v-bind="{ handleOnSave, navigateBack }" />
  </v-form>
</template>

<script lang="ts">
import Vue, { VueConstructor, PropOptions } from "vue";
import { baseRoutes } from "../../../router";
import { Recipe } from "../../../common/model";
import {
  FormRecipeNameComponent,
  FormRecipeIngredientsComponent,
  FormRecipeDescriptionComponent,
  FormRecipeStepsComponent,
  FormRecipeButtonsComponent,
} from "../../../common/components";
import { RecipeError } from "../viewModel";

interface Refs {
  $refs: {
    form: HTMLFormElement;
  };
}

export interface Props {
  recipe: PropOptions<Recipe>;
  recipeError: PropOptions<RecipeError>;
  onUpdateRecipe: PropOptions<(field: string, value: string) => void>;
  onSave: PropOptions<() => void>;
  onRemoveIngredient: PropOptions<(ingredient: string) => void>;
  onAddIngredient: PropOptions<(ingredient: string) => void>;
  onRemoveStep: PropOptions<(step: string) => void>;
  onAddStep: PropOptions<(step: string) => void>;
  navigateBack: PropOptions<() => void>;
}

export default (Vue as VueConstructor<Vue & Refs>).extend({
  name: "FormComponent",
  components: {
    FormRecipeNameComponent,
    FormRecipeIngredientsComponent,
    FormRecipeDescriptionComponent,
    FormRecipeStepsComponent,
    FormRecipeButtonsComponent,
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
    navigateBack: { required: true },
  } as Props,
  data() {
    return {
      isFormValid: false,
      ingredient: "",
      step: "",
    };
  },
  methods: {
    handleIngredientValue(value: string): void {
      this.ingredient = value;
    },
    handleStepValue(value: string): void {
      this.step = value;
    },
    handleAddIngredient(ingredient: string): void {
      if (this.checkifIngredientIsValid()) {
        this.onAddIngredient(ingredient);
        this.ingredient = "";
      }
    },
    handleAddStep(step: string): void {
      if (this.checkifStepIsValid()) {
        this.onAddStep(step);
        this.step = "";
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
    resultRecipeFieldError(field: string): boolean | string {
      return (
        this.recipeError[field].succeeded || this.recipeError[field].message
      );
    },
    handleOnSave() {
      this.$refs.form.validate();
      this.onSave();
    },
  },
});
</script>

<style scoped></style>
