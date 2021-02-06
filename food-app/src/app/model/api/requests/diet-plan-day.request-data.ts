import { MealTime } from "../../interfaces/meal-time.interface";

export interface DietPlanDayCreateRequestData {
  date: Date;
  description: string;
  mealTimes: MealTime[];
}

export interface DietPlanDayUpdateRequestData {
  date?: Date;
  description?: string;
  mealTimes?: MealTime[];
}