import { CartItem } from "@model/cart-item.model";
import { Typography } from "antd";

export const getCartSummary = (cartItems: CartItem[]) => {
  const data = cartItems;
  const total = data.reduce((prev, curr) => {
    return prev + curr.total;
  }, 0);

  const discountPrice = data.reduce((prev, curr) => {
    return prev + curr.discountedPrice;
  }, 0);

  const totalQtty = data.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  return (
    <div style={{ margin: "2.5rem 0 1rem 0" }} className="services-text-box">
      <div className="cartSummary">
        Discounted amount:{" "}
        {parseFloat((total - discountPrice).toString()).toFixed(0)} XAF
      </div>
      <div className="cartSummary">
        Total amount ({totalQtty} items):{" "}
        <Typography.Text delete type="danger">
          {" "}
          {parseFloat(total.toString()).toFixed(0)} XAF
        </Typography.Text>
      </div>
    </div>
  );
};
