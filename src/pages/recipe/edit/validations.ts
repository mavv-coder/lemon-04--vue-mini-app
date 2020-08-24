import {
  createFormValidation,
  Validators,
  ValidationSchema,
} from "@lemoncode/fonk";
import { hasItems } from "../../../common/validations/hasItems";

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    ingredients: [hasItems],
    description: [
      {
        validator: Validators.minLength,
        customArgs: { length: 200 },
        message: "Description must have 200 characters at least",
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
        customArgs: { pattern: "^[0-9][0-9]?$" },
        message: "Time only accepts numerical characters",
      },
      {
        validator: Validators.required,
      },
    ],
    steps: [hasItems],
  },
};

export const validations = createFormValidation(validationSchema);
