import { Gender } from "../../enums/gender.enum";

export interface PersonResponseData {
  _id: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  gender: Gender;
  description: string;
}