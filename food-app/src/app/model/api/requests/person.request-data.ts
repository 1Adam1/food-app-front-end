import { Gender } from "../../enums/gender.enum";

export interface PersonCreateRequestData {
  name: string;
  surname: string;
  dateOfBirth: Date;
  gender: Gender;
  description: string;
}

export interface PersonUpdateRequestData {
  name?: string;
  surname?: string;
  dateOfBirth?: Date;
  gender?: Gender;
  description?: string;
}