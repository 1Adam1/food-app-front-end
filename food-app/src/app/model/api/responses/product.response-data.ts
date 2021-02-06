import { Unit } from "../../enums/unit.enum";

export interface ProductResponseData {
  _id: string;
  name: string;
  description: string;
  defaultUnit: Unit;
  kilokaloriesPerUnit: number;
}