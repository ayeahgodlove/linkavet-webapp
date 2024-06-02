import { Avatar, Badge, Button, List, Popover, Typography } from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { removeCartItem } from "../../utils";
import { useRouter } from "next/navigation";
import { API_URL_UPLOADS_PRODUCTS } from "@constants/api-url";
import { useCart } from "@hook/cart.hook";

const ShoppingCart = () => {
  const {cartItems, addCartItems}= useCart();
  const navigator = useRouter();
  const [popovervisible, setPopovervisible] = useState(false);

  useEffect(() => {
    const cartHistory = JSON.parse(localStorage.getItem("order")!);
    if (!!cartHistory) {
      addCartItems([...cartHistory]);
    }
  }, []);

  useEffect(() => {
    if (!!cartItems) localStorage.setItem("order", JSON.stringify(cartItems));
    else localStorage.setItem("order", "");
  }, [cartItems]);

  const handleCheckoutSubmit = () => {
    navigator.push("/cart");
    setPopovervisible(false);
  };

  const CartHolder = () => {
    const handleRemoveCartItem = (item: any) => {
      const newCartItems = removeCartItem(cartItems, item);
      addCartItems(newCartItems);
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
                    src={`${API_URL_UPLOADS_PRODUCTS}/${item.imageUrl}`}
                    size={"large"}
                    alt={item.name}
                  />
                }
                title={<a href="/">{item.name}</a>}
                description={
                  <Typography.Text type="danger" strong>
                    {item.quantity * item.price}
                  </Typography.Text>
                }
              />
              <div
                className="removeCartItem"
                onClick={() => handleRemoveCartItem(item)}
              >
                <DeleteOutlined style={{ color: "red" }} />
              </div>
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
        <Badge count={cartItems.length || 0}>
          <ShoppingCartOutlined className="shoppingCardIcon" />
        </Badge>
      </Popover>
    </>
  );
};

export default ShoppingCart;
