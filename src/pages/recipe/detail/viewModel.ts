export interface Recipe {
  id: number;
  name: string;
  difficulty: string;
  imgUrl: string;
  time: number;
  description: string;
  ingredients: string[];
  steps: string[];
}

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  difficulty: "",
  imgUrl: "",
  time: 0,
  description: "",
  ingredients: [],
  steps: [],
});
