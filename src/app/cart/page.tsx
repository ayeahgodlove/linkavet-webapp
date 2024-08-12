"use client";
import {
  Avatar,
  Button,
  Checkbox,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Row,
  Spin,
  Table,
  Typography,
  message,
} from "antd";
import React, { Suspense, useEffect, useState } from "react";
import ShoppingImg from "../../assets/images/shopping.svg";
import { DeleteOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";
import { useCart } from "@hook/cart.hook";
import { CartItem } from "@model/cart-item.model";
import { format } from "@utils/format";
import Image from "next/image";
import { useSocket } from "@contexts/socket-provider.context";
import { API_URL_UPLOADS_PRODUCTS } from "@constants/api-url";

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
        className="w-inline-block"
        size="large"
        style={{ borderRadius: 10 }}
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const { addToCard, clearItem, removeItem } = useCart();
  const socket: any = useSocket();

  const handleCheckoutSubmit = () => {
    message.success("Your order has been placed successfully.");
    clearItem();
    navigator.push("/thank-you");
  };

  const handleRemoveCartItem = (item: CartItem) => {
    removeItem(item.id);
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
      <div style={{ margin: "3rem 0 1rem 0" }} className="services-text-box">
        <div className="cartSummary">
          Discounted amount:{" "}
          {parseFloat((total - discountPrice).toString()).toFixed(0)} XAF
        </div>
        <div className="cartSummary">
          Total amount ({totalQty} items):{" "}
          {parseFloat(discountPrice.toString()).toFixed(0)} XAF
          <Typography.Text delete type="danger">
            {" "}
            {parseFloat(total.toString()).toFixed(0)} XAF
          </Typography.Text>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const handleCartEvent = (data: CartItem[]) => {
      console.log("Cart Event Received:", data);
      setCartItems(data); // Update the cartItems state with the received data
    };

    if (socket) {
      socket.on("cart-items", handleCartEvent);
    }
  }, [socket]);
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            minHeight: "65vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      }
    >
      <DefaultLayout>
        <PageContent>
          <Row
            gutter={[16, 18]}
            align={"middle"}
            justify={"center"}
            style={{ margin: "2rem 0" }}
          >
            {!!cartItems && cartItems.length > 0 ? (
              <Col xs={22} md={18}>
                <h2 style={{ textAlign: "center" }}>
                  🥰 Just a minute to finish your checkout.
                </h2>
                <div className="checkoutForm">
                  <Table
                    dataSource={cartItems}
                    pagination={false}
                    rowKey={(data) => data.id}
                    columns={[
                      {
                        title: "No",
                        dataIndex: "no",
                        render(value, record, index) {
                          return (
                            <span key={record.id}>
                              {format.twoChar((index + 1).toString())}
                            </span>
                          );
                        },
                      },

                      {
                        title: "Image",
                        dataIndex: "image",
                        render: (value, record, index) => {
                          return (
                            <Avatar
                              src={`${API_URL_UPLOADS_PRODUCTS}/${record.product.productImages[0]}`}
                              size={"large"}
                              alt={record.product.name}
                            />
                          );
                        },
                      },
                      {
                        title: "Name",
                        dataIndex: "name",
                        width: "8rem",
                        render: (value, record, index) => record.product?.name,
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

                                const item = cartItems.find((item) => {
                                  return item.id === record.id
                                    ? {
                                        ...item,
                                        quantity: value,
                                        total: item.amount * value,
                                        discountedPrice:
                                          (item.amount *
                                            value *
                                            (100 - item.discountPercentage)) /
                                          100,
                                      }
                                    : item;
                                });
                                addToCard(
                                  `${item?.productId}`,
                                  Number(item?.quantity)
                                );
                              }}
                            />
                          );
                        },
                      },
                      {
                        title: "Price",
                        dataIndex: "discountedPrice",
                        render: (value, record) => {
                          return `${format.number(value)} XAF`;
                        },
                        align: "right",
                      },
                      {
                        title: "Total",
                        dataIndex: "total",
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
                  <Typography.Paragraph>
                    {getCartSummary()}
                  </Typography.Paragraph>
                  <CheckoutCartBtn onFinish={() => handleCheckoutSubmit()} />
                </div>
              </Col>
            ) : (
              <Col xs={22} md={16}>
                <h2>
                  👋 Your shopping cart is empty. How about adding some items to
                  it? <br /> Return <Link href="/"> home page</Link>.
                </h2>
                <Image
                  src={ShoppingImg}
                  alt="Shopping with us"
                  style={{ width: "280px", maxWidth: "80%" }}
                />
              </Col>
            )}
          </Row>
        </PageContent>
      </DefaultLayout>
    </Suspense>
  );
}
