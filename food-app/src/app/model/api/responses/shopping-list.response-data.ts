import { Price } from "../../interfaces/price.interface";
import { ProductOffer } from "../../interfaces/product-offer.interface";

export interface ShoppingListResponseData {
  _id: string;
  totalPrice: Price;
  items: ProductOffer[],
  description: string,
  date: Date
}