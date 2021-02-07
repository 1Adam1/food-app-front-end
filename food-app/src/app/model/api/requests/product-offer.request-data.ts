import { Price } from "../../interfaces/price.interface";

export interface ProductOfferCreateRequestData {
  name: string;
  description: string;
  price: Price;
  sizeInUnits: number;
}

export interface ProductOfferUpdateRequestData {
  name?: string;
  description?: string;
}