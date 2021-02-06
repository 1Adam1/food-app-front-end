import { Ingredient } from "../../interfaces/ingredient.interface";
import { Recipe } from "../../interfaces/recipe.interface";

export interface MealCreateRequestData {
  name: string;
  description: string;
  recipe: Recipe;
  ingredients: Ingredient[];
}

export interface mealUpdateRequestData {
  name?: string;
  description?: string;
  recipe?: Recipe;
}