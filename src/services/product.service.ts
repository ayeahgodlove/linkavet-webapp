import { IProduct, IProductResponse, IProductResponses } from "@model/product.model";
import { requestType } from "./.";

export const productService = {
  list: async (): Promise<IProductResponses> =>
    requestType.get("/api/products"),
  getSingleProduct: async (id: string): Promise<IProductResponse> =>
    requestType.get(`/api/products/${id}`),
  getProductsByCategory: async (category: string): Promise<IProductResponses> =>
    requestType.get(`/api/products/category/${category}`),
  getProductsByKeyWord: async (query: string): Promise<IProductResponses> =>
    requestType.get(`/api/products/search/query?q=${query}`),
  create: (product: IProduct): Promise<IProductResponse> =>
    requestType.post(`/api/products`, product),
  update: (product: IProduct): Promise<IProductResponse> => 
    requestType.put(`/api/products`, product),
  delete: (product: IProduct): Promise<IProductResponse> =>
    requestType.del(`/api/products`, product),
};
