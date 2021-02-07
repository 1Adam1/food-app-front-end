import { Unit } from "../../enums/unit.enum";

export interface ProductCreateRequestData {
  name: string;
  description: string;
  defaultUnit: Unit;
  kilocaloriesPerUnit: number;
}

export interface ProductUpdateRequestData {
  name?: string;
  description?: string;
}