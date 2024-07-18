import { AVAILABILITY_STATUS } from "@constants/constant";
import { IBaseState } from "./base-state.model";
import { IResponseBase } from "./response-base.model";
import { emptyCategory, ICategory } from "./category.model";
import { IImage } from "./image.model";

export interface IProduct {
  id: string;
  name: string;
  amount: number;
  description: string;
  categoryId: string;
  shortDescription: string;
  productImages: string[];
  qtty: number;
  tags: string[];

  availabilityStatus: AVAILABILITY_STATUS;
  rating: number;
  discountPercentage: number;

  images: IImage[];
  category: ICategory;
}

export const emptyProduct: IProduct = {
  id: "",
  name: "",
  amount: 0,
  description: "",
  qtty: 0,
  availabilityStatus: AVAILABILITY_STATUS.IN_STOCK,
  rating: 0,
  discountPercentage: 0,
  images: [],
  category: emptyCategory,
  categoryId: "",
  shortDescription: "",
  productImages: [],
  tags: [],
};

export interface IProductState extends IBaseState {
  readonly products: IProduct[];
  readonly product: IProduct;
}

export interface IProductResponse extends IResponseBase {
  data: IProduct;
  message: string;
}
export interface IProductResponses extends IResponseBase {
  data: IProduct[];
}
