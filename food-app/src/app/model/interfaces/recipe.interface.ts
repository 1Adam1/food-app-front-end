import { Indexable } from "./indexable.interface";
import { RecipeDetails } from "./recipe-details.interface";
import { RecipeStep } from "./recipe-step.interface";

export interface Recipe extends Indexable {
  steps: RecipeStep[];
  details: RecipeDetails;
}