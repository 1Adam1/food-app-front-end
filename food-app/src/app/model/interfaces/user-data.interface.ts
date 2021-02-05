import { Indexable } from "./indexable.interface";
import { Token } from "./token";

export interface UserData extends Indexable {
  login: string;
  password: string;
  name: string;
  surname: string;
  description: string;
  tokens: Token[];
}