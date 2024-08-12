import { CartItem } from "@model/cart-item.model";
import { CartService } from "@services/cart.service";
import { message } from "antd";
import { useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const loadCartItems = async () => {
    try {
      const response = await CartService.list();
      setCartItems(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCard = async (productId: string, quantity: number) => {
    try {
      const response = await CartService.create(productId, quantity);
      message.success("Item Added to Cart Successfully!"); 
      console.log("res: ", response);
      await loadCartItems()
    } catch (error) {
      console.log("error: ", error);
      message.error("Item was not added!");
    }
  };

  const removeItem = async (itemId: string) => {
    try {
      message.success("Item Removed to Cart Successfully!");
      const response = await CartService.remove(itemId);
      console.log("res: ", response);
    } catch (error) {
      console.log("error: ", error);
      message.error("Item was not removed!");
    }
  };

  const clearItem = async () => {
    try {
      message.success("Cart Cleared Successfully!");
      const response = await CartService.clear();
      console.log("res: ", response);
    } catch (error) {
      console.log("error: ", error);
      message.error("Cart was not removed!");
    }
  };
  return { cartItems, loadCartItems, addToCard, removeItem, clearItem };
};

export { useCart };
