"use client";
import {
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  InputNumber,
  Table,
  Typography,
  message,
} from "antd";
import React, { useState } from "react";
import ShoppingImg from "../../assets/images/shopping.svg";
import { DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";
import { useCart } from "@hook/cart.hook";
import { CartItem } from "@model/cart-item.model";
import { format } from "@utils/format";

interface ICheckoutBtn {
  onFinish: () => void;
}
const CheckoutCartBtn: React.FC<ICheckoutBtn> = ({ onFinish }) => {
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
  const onConfirmOrder = (data: any) => {
    console.log("🚀 ~ file: index.js:216 ~ onConfirmOrder ~ data:", data);
    setCheckoutDrawerOpen(false);
    onFinish();
  };

  return (
    <>
      <Button
        type="primary"
        className="checkoutBtn"
        onClick={() => {
          setCheckoutDrawerOpen(true);
        }}
      >
        Checkout your cart
      </Button>
      <Drawer
        open={checkoutDrawerOpen}
        onClose={() => setCheckoutDrawerOpen(false)}
        title="Checkout Your Cart"
        contentWrapperStyle={{ width: "500px" }}
      >
        <Form
          onFinish={onConfirmOrder}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
        >
          <Form.Item
            label="Full name"
            name="full_name"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="Enter your full name..." />
          </Form.Item>
          <Form.Item
            label="Email"
            name="your_email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="Enter your email..." />
          </Form.Item>
          <Form.Item
            label="Address"
            name="your_address"
            rules={[{ required: true, message: "Please enter your address" }]}
          >
            <Input placeholder="Enter your address..." />
          </Form.Item>
          <Form.Item name="cod" valuePropName="checked" noStyle>
            <Checkbox defaultChecked={true}>Cash On Delivery 💸</Checkbox>
          </Form.Item>

          <Typography.Paragraph type="secondary">
            More payment methods will be updated soon...
          </Typography.Paragraph>
          <Button type="primary" htmlType="submit">
            Confirm Order
          </Button>
        </Form>
      </Drawer>
    </>
  );
};

export default function IndexPage() {
  const navigator = useRouter();

  const {
    cartItems,
    addCartItems,
    clearCartItems,
    removeFromCart,
    updateCart,
  } = useCart();

  const handleCheckoutSubmit = () => {
    message.success("Your order has been placed successfully.");
    addCartItems([]);
    clearCartItems();
    navigator.push("/thank-you");
  };

  const handleRemoveCartItem = (item: CartItem) => {
    removeFromCart(item.id);
  };

  const getCartSummary = () => {
    const data = cartItems;
    const total = data.reduce((prev, curr) => {
      return prev + curr.total;
    }, 0);

    const discountPrice = data.reduce((prev, curr) => {
      return prev + curr.discountedPrice;
    }, 0);

    const totalQty = data.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);

    return (
      <>
        <div className="cartSummary">
          Discounted amount: $
          {parseFloat((total - discountPrice).toString()).toFixed(0)}
        </div>
        <div className="cartSummary">
          Total amount ({totalQty} items): $
          {parseFloat(discountPrice.toString()).toFixed(0)}{" "}
          <Typography.Text delete type="danger">
            ${parseFloat(total.toString()).toFixed(0)}
          </Typography.Text>
        </div>
      </>
    );
  };

  return (
    <DefaultLayout>
      <PageContent>
        {!!cartItems && cartItems.length > 0 ? (
          <>
            <h2>🥰 Just a minute to finish your checkout.</h2>
            <div className="checkoutForm">
              <Table
                dataSource={cartItems}
                pagination={false}
                scroll={{ x: 860 }}
                rowKey={(data) => data.id}
                columns={[
                  {
                    title: "Serial",
                    dataIndex: "serial",
                    render(value, record, index) {
                      return (
                        <span key={record.id}>
                          {format.twoChar((index + 1).toString())}
                        </span>
                      );
                    },
                    width: "5rem",
                  },
                  {
                    title: "Name",
                    dataIndex: "name",
                    width: "13rem",
                  },
                  {
                    title: "Quantity",
                    dataIndex: "quantity",
                    width: 120,
                    render: (value, record) => {
                      return (
                        <InputNumber
                          defaultValue={value}
                          min={0}
                          style={{ width: "65px" }}
                          onChange={(value) => {
                            console.log(
                              "🚀 ~ file: index.js:160 ~ ShoppingCart ~ record:",
                              record
                            );
                            console.log(
                              "🚀 ~ file: index.js:160 ~ ShoppingCart ~ value:",
                              value
                            );

                            const newCartItems = cartItems.map((item) => {
                              return item.id === record.id
                                ? {
                                    ...item,
                                    quantity: value,
                                    total: item.price * value,
                                    discountedPrice:
                                      (item.price *
                                        value *
                                        (100 - item.discountPercentage)) /
                                      100,
                                  }
                                : item;
                            });
                            addCartItems(newCartItems);
                            updateCart(newCartItems);
                          }}
                        />
                      );
                    },
                  },
                  {
                    title: "Price",
                    dataIndex: "discountedPrice",
                    width: 220,
                    render: (value, record) => {
                      return `${format.number(value)} XAF`;
                    },
                    align: "right",
                  },
                  {
                    title: "Total",
                    dataIndex: "total",
                    width: 220,
                    render: (value, record) => {
                      return `${format.number(value)} XAF`;
                    },
                    align: "right",
                  },
                  {
                    title: "Action",
                    key: "action",
                    fixed: "left",
                    width: 80,
                    render: (_, record) => (
                      <a
                        href="#delete"
                        onClick={() => handleRemoveCartItem(record)}
                      >
                        <DeleteOutlined style={{ color: "red" }} />
                      </a>
                    ),
                  },
                ]}
              />
              <Typography.Paragraph>{getCartSummary()}</Typography.Paragraph>
              <CheckoutCartBtn onFinish={() => handleCheckoutSubmit()} />
            </div>
          </>
        ) : (
          <>
            <h2>
              👋 Your shopping cart is empty. How about adding some items to it?{" "}
              <br /> Return <Link href="/"> home page</Link>.
            </h2>
            <img
              src={ShoppingImg}
              alt="Shopping with us"
              style={{ width: "280px", maxWidth: "80%" }}
            />
          </>
        )}
      </PageContent>
    </DefaultLayout>
  );
}
