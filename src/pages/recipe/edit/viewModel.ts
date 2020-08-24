import {
  ValidationResult,
  createDefaultValidationResult,
} from "@lemoncode/fonk";

export interface Recipe {
  id: number;
  name: string;
  imgUrl: string;
  time: number;
  description: string;
  ingredients: string[];
  steps: string[];
}

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  imgUrl: "",
  time: 0,
  description: "",
  ingredients: [],
  steps: [],
});

export interface RecipeError {
  name: ValidationResult;
  ingredients: ValidationResult;
  description: ValidationResult;
  time: ValidationResult;
}

export const createEmptyRecipeError = (): RecipeError => ({
  name: createDefaultValidationResult(),
  ingredients: createDefaultValidationResult(),
  description: createDefaultValidationResult(),
  time: createDefaultValidationResult(),
});
