import { Avatar, Badge, Button, List, Popover, Typography } from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL_UPLOADS_PRODUCTS } from "@constants/api-url";
import { useCart } from "@hook/cart.hook";
import { CartItem } from "@model/cart-item.model";
import Link from "next/link";

interface Props {
  cartCount: number;
  cartItems: CartItem[];
}
const ShoppingCart: React.FC<Props> = ({ cartCount, cartItems }) => {
  const { removeItem } = useCart();
  const navigator = useRouter();
  const [popovervisible, setPopovervisible] = useState(false);

  const handleCheckoutSubmit = () => {
    navigator.push("/cart");
    setPopovervisible(false);
  };

  const CartHolder = () => {
    const handleRemoveCartItem = (item: any) => {
      removeItem(item.id);
    };

    return (
      <div className="cartHolder">
        <List
          itemLayout="horizontal"
          dataSource={cartItems}
          style={{
            width: "400px",
            maxWidth: "80vw",
            maxHeight: "50vh",
            overflowY: "auto",
          }}
          size="large"
          renderItem={(item: any, index: number) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`${API_URL_UPLOADS_PRODUCTS}/${item.product.productImages[0]}`}
                    size={"large"}
                    alt={item.product.name}
                  />
                }
                title={<Link href={`/store/${item.productId}`}>{item.product.name}</Link>}
                description={
                  <Typography.Text type="danger" strong>
                    {item.quantity * item.discountedPrice}
                  </Typography.Text>
                }
              />
              <Button
                className="removeCartItem"
                icon={<DeleteOutlined style={{ color: "red" }} />}
                onClick={() => handleRemoveCartItem(item)}
              />
            </List.Item>
          )}
        />

        <Button
          type="primary"
          onClick={() => handleCheckoutSubmit()}
          className="checkOutBtn"
        >
          Checkout
        </Button>
      </div>
    );
  };

  const handlePopoverChange = (newOpen: boolean) => {
    setPopovervisible(newOpen);
  };

  return (
    <>
      <Popover
        placement="bottomRight"
        title={"Your Cart"}
        content={<CartHolder />}
        trigger="click"
        open={popovervisible}
        onOpenChange={handlePopoverChange}
      >
        <Badge count={cartCount || 0} style={{ color: "#ddd" }}>
          <ShoppingCartOutlined className="shoppingCardIcon" />
        </Badge>
      </Popover>
    </>
  );
};

export default ShoppingCart;
