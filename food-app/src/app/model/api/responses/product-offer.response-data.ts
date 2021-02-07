import { Price } from "../../interfaces/price.interface";

export interface ProductOfferResponseData {
  price: Price;
  _id: string;
  name: string;
  description: string;
  sizeInUnits: number;
  product: string;
  shop: string;
}