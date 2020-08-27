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
