import { MealTime } from "../../interfaces/meal-time.interface";

export interface ConsumedMealsHistoryDayResponseData {
  _id: string;
  date: Date;
  description: string;
  mealTimes: MealTime[];
  totalKilocaloriesConsumption: number;
  profile: string;
}