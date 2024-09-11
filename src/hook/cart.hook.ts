import { CartService } from "@services/cart.service";
import { message } from "antd";

const useCart = () => {
  const loadCartItems = async () => {
    try {
      const response = await CartService.list();
      return response;
    } catch (error) {
      return []
    }
  };

  const addToCard = async (productId: string, quantity: number) => {
    try {
      await CartService.create(productId, quantity);
      message.success("Item Added to Cart Successfully!");
      await loadCartItems();
    } catch (error) {
      message.error("Item was not added!");
    }
  };

  const removeItem = async (itemId: string) => {
    try {
      message.success("Item Removed to Cart Successfully!");
      await CartService.remove(itemId);
    } catch (error) {
      message.error("Item was not removed!");
    }
  };

  const clearItem = async () => {
    try {
      message.success("Cart Cleared Successfully!");
      await CartService.clear();
    } catch (error) {
      message.error("Cart was not removed!");
    }
  };
  return { loadCartItems, addToCard, removeItem, clearItem };
};

export { useCart };
