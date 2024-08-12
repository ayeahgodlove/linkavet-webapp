import { IBaseState } from "./base-state.model";
import { IResponseBase } from "./response-base.model";

export interface IFaq {
  id: string;
  question: string;
  answer: string;
}

export const emptyFaq: IFaq = {
  id: "",
  question: "",
  answer: "",
};

export interface IFaqState extends IBaseState {
  readonly categories: IFaq[];
  readonly faq: IFaq;
}

export interface IFaqResponse extends IResponseBase {
  data: IFaq;
  message: string;
}
export interface IFaqResponses extends IResponseBase {
  data: IFaq[];
}
