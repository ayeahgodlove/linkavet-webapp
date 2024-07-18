import { IBaseState } from "./base-state.model";
import { IResponseBase } from "./response-base.model";

export interface IReview {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  comment: string;
  toggle: boolean;
}

export const emptyReview: IReview = {
  id: "",
  productId: "",
  userId: "",
  rating: 0,
  comment: "",
  toggle: false,
};

export interface IReviewState extends IBaseState {
  readonly reviews: IReview[];
  readonly review: IReview;
}

export interface IReviewResponse extends IResponseBase {
  data: IReview;
  message: string;
}
export interface IReviewResponses extends IResponseBase {
  data: IReview[];
}
