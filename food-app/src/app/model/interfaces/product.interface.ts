import { Unit } from "../enums/unit.enum";
import { Indexable } from "./indexable.interface";

export interface Product extends Indexable {
  name: string;
  description: string;
  defaultUnit: Unit;
  kilocaloriesPerUnit: number;
}