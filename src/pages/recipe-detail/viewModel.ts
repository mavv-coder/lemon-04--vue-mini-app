import { Recipe } from "../../common/model";

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  difficulty: "",
  favorite: false,
  imgUrl: "",
  time: 0,
  description: "",
  ingredients: [],
  steps: [],
});
