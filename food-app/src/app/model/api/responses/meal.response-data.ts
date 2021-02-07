import { Ingredient } from "../../interfaces/ingredient.interface";
import { Recipe } from "../../interfaces/recipe.interface";

export interface MealResponseData {
  _id: string;
  name: string;
  description: string;
  totalKilocalories: number;
  recipe: Recipe;
  ingredients: Ingredient[];
}