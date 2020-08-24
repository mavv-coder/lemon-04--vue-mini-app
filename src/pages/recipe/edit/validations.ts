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
    description: [Validators.required],
    time: [
      {
        validator: Validators.maxLength,
        customArgs: { length: 2 },
      },
      {
        validator: Validators.required,
      },
    ],
  },
};

export const validations = createFormValidation(validationSchema);
