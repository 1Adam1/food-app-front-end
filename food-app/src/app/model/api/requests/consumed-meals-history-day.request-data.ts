import { MealTime } from "../../interfaces/meal-time.interface";

export interface ConsumedMealsHistoryDayCreateRequestData {
  date: Date;
  description: string;
  mealTimes: MealTime[];
}

export interface ConsumedMealsHistoryDayUpdateRequestData {
  date?: Date;
  description?: string;
  mealTimes?: MealTime[];
}