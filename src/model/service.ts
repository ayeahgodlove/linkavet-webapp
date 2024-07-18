import { IBaseState } from "./base-state.model";
import { IResponseBase } from "./response-base.model";

export interface IService {
  id: string; //primary key
  title: string;
  description: string;
  price: number;
  fileName: string;
  slug: string;
  short_description: string;
}

export const emptyService: IService = {
  id: "",
  slug: "",
  title: "",
  fileName: "",
  description: "",
  price: 0,
  short_description: ""
};

export interface IServiceState extends IBaseState {
  readonly services: IService[];
  readonly service: IService;
}

export interface IServiceResponse extends IResponseBase {
  data: IService;
}

export interface IServiceResponses extends IResponseBase {
  data: IService[];
}
