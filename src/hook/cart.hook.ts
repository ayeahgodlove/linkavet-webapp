import { CartItem } from "@model/cart-item.model";
import { addItem, clearCart, removeItem } from "@store/slice/cart.slice";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";

export const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const addToCart = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const addCartItems = (items: CartItem[]) => {
    for (const item of items) {
      dispatch(addItem(item));
    }
  };

  const updateCart = (cartItems: CartItem[]) => {
    localStorage.setItem("order", JSON.stringify(cartItems));
  };

  const removeFromCart = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCartItems,
    addCartItems,
    updateCart,
  };
};
