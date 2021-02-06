export interface PersonalProfileCreateRequestData {
  name: string;
  dailyKilocalorieIntake: number;
  description: string;
}

export interface PersonalProfileUpdateRequestData {
  name?: string;
  dailyKilocalorieIntake?: number;
  description?: string;
}