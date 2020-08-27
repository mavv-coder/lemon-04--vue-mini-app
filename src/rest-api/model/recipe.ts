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
