import { IBaseState } from "./base-state.model";
import { IResponseBase } from "./response-base.model";

export interface IImage {
  id: string;
  name: string;
  url: string
}

export const emptyImage: IImage = {
  id: "",
  name: "",
  url: ""
};

export interface IImageState extends IBaseState {
  readonly images: IImage[];
  readonly image: IImage;
}

export interface IImageResponse extends IResponseBase {
  data: IImage;
  message: string;
}
export interface IImageResponses extends IResponseBase {
  data: IImage[];
}