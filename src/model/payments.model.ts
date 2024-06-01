import { IBaseState } from "./base-state.model";
import { IResponseBase } from "./response-base.model";

export interface IPayment {
  id: string;
  userId: string;
  orderId: string;
  amount: number;
  status: string;
}

export const emptyPayment: IPayment = {
  id: "",
  userId: "",
  status: "",
  orderId: "",
  amount: 0
};

export interface IPaymentState extends IBaseState {
  readonly payments: IPayment[];
  readonly payment: IPayment;
}

export interface IPaymentResponse extends IResponseBase {
  data: IPayment;
  message: string;
}
export interface IPaymentResponses extends IResponseBase {
  data: IPayment[];
}