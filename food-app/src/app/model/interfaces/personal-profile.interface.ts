import { ConsumedMealsHistoryDay } from "./consumed-meals-history-day.interface";
import { DietPlanDay } from './diet-plan-day.interface';
import { Indexable } from "./indexable.interface";
import { Person } from './person.interface';

export interface PersonalProfile extends Indexable {
  name: string;
  person: Person;
  description: string;
  dailyKilocalorieIntake: number;
  consumedMealsHistory: ConsumedMealsHistoryDay[];
  dietPlan: DietPlanDay[];
}