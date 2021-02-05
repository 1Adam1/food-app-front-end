import { Indexable } from "./indexable.interface";
import { Price } from "./price.interface";
import { ProductOffer } from "./product-offer.interface";

export interface ShoppingList extends Indexable {
  items: ProductOffer[];
  description: string;
  date: Date;
  totalPrice: Price | undefined;
}