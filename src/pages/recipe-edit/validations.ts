import {
  createFormValidation,
  Validators,
  ValidationSchema,
} from "@lemoncode/fonk";
import { hasItems } from "../../common/validations/hasItems";

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    difficulty: [Validators.required],
    ingredients: [
      {
        validator: hasItems,
        customArgs: { field: "ingredients" },
        message: "Should has one or more ingredients",
      },
    ],
    steps: [
      {
        validator: hasItems,
        customArgs: { field: "steps" },
        message: "Should has one or more steps",
      },
    ],
    description: [
      {
        validator: Validators.minLength,
        customArgs: { length: 50 },
        message: "Description must have 50 characters at least",
      },
      {
        validator: Validators.required,
      },
    ],
    time: [
      {
        validator: Validators.maxLength,
        customArgs: { length: 2 },
        message: "Time must have 2 characters max",
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: "^[1-9][0-9]?$" },
        message: "Introduce a correct number",
      },
      {
        validator: Validators.required,
      },
    ],
  },
};

export const validations = createFormValidation(validationSchema);
