import { IResponseBase } from "./response-base.model";

export interface CartItem {
  id: string;
  name: string;
  amount: number;
  quantity: number;
  imageUrl: string;
  total: number;
  discountPercentage: number;
  discountedPrice: number;

  product?: any;
  user?: any;
  productId?: string
}

export interface CartState {
  items: CartItem[];
}

export const emptyCartItem: CartItem = {
  id: "",
  name: "",
  amount: 0,
  quantity: 0,
  imageUrl: "",
  total: 0,
  discountPercentage: 0,
  discountedPrice: 0,
};
