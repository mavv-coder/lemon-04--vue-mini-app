import { ValidationResult } from "@lemoncode/fonk";

export interface Recipe {
  id: number;
  name: string;
  difficulty: string;
  favorite: boolean;
  imgUrl: string;
  time: number;
  description: string;
  ingredients: string[];
  steps: string[];
}

export interface RecipeError {
  imgUrl: ValidationResult;
  name: ValidationResult;
  ingredients: ValidationResult;
  description: ValidationResult;
  time: ValidationResult;
  steps: ValidationResult;
}
