import { ProductOffer } from "../../interfaces/product-offer.interface";

export interface ShoppingListCreateRequestData {
  items: ProductOffer[];
  description: string;
  date: Date;
}

export interface ShoppingListUpdateRequestData {
  items?: ProductOffer[];
  description?: string;
  date?: Date;
}