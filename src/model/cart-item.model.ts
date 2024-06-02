import { IResponseBase } from "./response-base.model";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

export interface CartState {
  items: CartItem[];
}

export const emptyCartItem: CartItem = {
  id: "",
  name: "",
  price: 0,
  quantity: 0,
  imageUrl: "",
  total: 0,
  discountPercentage: 0,
  discountedPrice: 0
};