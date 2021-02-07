import { Gender } from "../enums/gender.enum";
import { Indexable } from "./indexable.interface";
import { PersonalProfile } from "./personal-profile.interface";

export interface Person extends Indexable {
  name: string;
  surname: string;
  dateOfBirth: Date;
  gender: Gender;
  description: string;
  profiles: PersonalProfile[];
}