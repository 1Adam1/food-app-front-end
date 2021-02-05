import { Indexable } from "./indexable.interface";
import { Price } from "./price.interface";
import { Product } from "./product.interface";

export interface ProductOffer extends Indexable {
  name: string;
  description: string;
  product: Product;
  price: Price;
  sizeInUnits: number;
}