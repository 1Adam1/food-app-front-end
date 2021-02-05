import { Indexable } from './indexable.interface';
import { MealTime } from './meal-time.interface';

export interface ConsumedMealsHistoryDay extends Indexable {
  date: Date; 
  mealTimes: MealTime[];
  totalKilocaloriesConsumption: number;
}