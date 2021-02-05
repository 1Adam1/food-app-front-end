import { Indexable } from './indexable.interface';
import { MealTime } from './meal-time.interface';

export interface DietPlanDay extends Indexable {
  date: Date;
  description: string;
  mealTimes: MealTime[];
  totalKilocaloriesConsumption: number; 
}