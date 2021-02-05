import { Indexable } from "./indexable.interface";

export interface UserData extends Indexable {
  login: string;
  password: string;
  name: string;
  surname: string;
  description: string;
}