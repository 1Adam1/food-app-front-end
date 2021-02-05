import { Indexable } from "./indexable.interface";
import { ProductOffer } from "./product-offer.interface";

export interface Shop extends Indexable {
  name: string;
  description: string;
  offers: ProductOffer[];
}