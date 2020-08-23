export interface Recipe {
  id: number;
  name: string;
  vegetarian: boolean;
  imgUrl: string;
  calories: number;
  description: string;
  ingredients: string[];
}
