import { Indexable } from "./indexable.interface";
import { Ingredient } from "./ingredient.interface";
import { Recipe } from "./recipe.interface";

export interface Meal extends Indexable {
  name: string;
  description: string;
  ingredients: Ingredient[];
  recipe: Recipe;
  totalKilocalories: number;
}