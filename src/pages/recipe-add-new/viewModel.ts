import {
  ValidationResult,
  createDefaultValidationResult,
} from "@lemoncode/fonk";
import { Recipe } from "../../common/model";

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  imgUrl: "",
  favorite: false,
  difficulty: "",
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
  steps: ValidationResult;
  imgUrl: ValidationResult;
  difficulty: ValidationResult;
}

export const createEmptyRecipeError = (): RecipeError => ({
  name: createDefaultValidationResult(),
  ingredients: createDefaultValidationResult(),
  description: createDefaultValidationResult(),
  time: createDefaultValidationResult(),
  steps: createDefaultValidationResult(),
  imgUrl: createDefaultValidationResult(),
  difficulty: createDefaultValidationResult(),
});
