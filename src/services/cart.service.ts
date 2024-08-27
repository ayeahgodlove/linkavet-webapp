import { API_URL } from "@constants/api-url";
import axios from "axios";

import { requestType } from "@services";
import { CartItem } from "@model/cart-item.model";

export const CartService = {
  list: (): Promise<any> => requestType.get("/api/carts/items"),
  create: (productId: string, quantity: number): Promise<CartItem> =>
    requestType.post(`/api/carts/add`, { productId, quantity }),
  remove: (itemId: string): Promise<CartItem> =>
    requestType.del(`/api/carts/remove/${itemId}`, {}),
  clear: (): Promise<CartItem> => requestType.del(`/api/carts/clear`, {}),
};

export const addToCard = async (id: string) => {
  try {
    const resp = await axios.post(`${API_URL}/api/carts/add`, {
      userId: "1",
      products: [
        {
          id: id,
          quantity: 1,
        },
      ],
    });
    return resp.data;
  } catch (error) {
    return [];
  }
};

export const getAllCarts = async () => {
  try {
    const resp = await axios.get(`${API_URL}/api/carts/items`);
    console.log("🚀 ~ file: index.js:69 ~ getAllCarts ~ resp:", resp.data);
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:55 ~ getAllCarts ~ error:", error);
    return [];
  }
};

export const getSingleCart = async (id = 1) => {
  try {
    const resp = await axios.get(`${API_URL}/carts/${id}`);
    console.log("🚀 ~ file: index.js:53 ~ getSingleCard ~ resp:", resp.data);
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:55 ~ getSingleCard ~ error:", error);
    return [];
  }
};
