import { IBaseState } from "./base-state.model";
import { IProduct } from "./product.model";
import { IResponseBase } from "./response-base.model";

export interface IOrder {
  id: string;
  userId: string;
  refLine: number;
  productId: string;
  unitPrice: number;
  total: number;
  status: string;
  orderNo: string;
}

export const emptyOrder: IOrder = {
  id: "",
  productId: "",
  userId: "",
  refLine: 0,
  unitPrice: 0,
  total: 0,
  status: "",
  orderNo: ""
};

export interface IOrderState extends IBaseState {
  readonly orders: IOrder[];
  readonly order: IOrder;
  readonly productOrders: IProduct[]
}

export interface IOrderResponse extends IResponseBase {
  data: IOrder;
  message: string;
}
export interface IOrderResponses extends IResponseBase {
  data: IOrder[];
}