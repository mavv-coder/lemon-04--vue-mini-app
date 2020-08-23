import {
  ValidationResult,
  createDefaultValidationResult,
} from "@lemoncode/fonk";

export interface Recipe {
  id: number;
  name: string;
  vegetarian: boolean;
  imgUrl: string;
  calories: number;
  description: string;
  ingredients: string[];
}

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  calories: 0,
  imgUrl: "",
  vegetarian: false,
  description: "",
  ingredients: [],
});

export interface RecipeError {
  name: ValidationResult;
  ingredients: ValidationResult;
  description: ValidationResult;
}

export const createEmptyRecipeError = (): RecipeError => ({
  name: createDefaultValidationResult(),
  ingredients: createDefaultValidationResult(),
  description: createDefaultValidationResult(),
});
