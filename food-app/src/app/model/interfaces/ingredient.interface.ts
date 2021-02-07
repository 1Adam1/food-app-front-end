import { Indexable } from "./indexable.interface";
import { Product } from "./product.interface";

export interface Ingredient extends Indexable {
  product: Product;
  size: number;
}