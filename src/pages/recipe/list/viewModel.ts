export interface Recipe {
  id: number;
  name: string;
  imgUrl: string;
  time: number;
  description: string;
  ingredients: string[];
  steps: string[];
}
