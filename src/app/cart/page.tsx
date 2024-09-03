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
  Radio,
  RadioChangeEvent,
  Row,
  Space,
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
import { API_URL_UPLOADS_PRODUCTS, APP_URL } from "@constants/api-url";
import { OrderService } from "@services/order.service";
import { emptyOrder, IOrder } from "@model/order.model";
import { generateOrderNumber } from "@utils/order-no";
import { usePaymentMethod } from "@hook/payment-method.hook";
import { ProcessPaymentService } from "@services/process-payment.service";
import { useInitTransaction } from "@hook/init-transaction.hook";

interface ICheckoutBtn {
  onFinish: () => void;
  cartItems: CartItem[];
}
const CheckoutCartBtn: React.FC<ICheckoutBtn> = ({ onFinish, cartItems }) => {
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
  const [method, setMethod] = useState("MOMO");
  const { setPaymentMethod } = usePaymentMethod();
  const { setInitTransaction } = useInitTransaction();
  const [orderId, setOrderId] = useState<any>(null);
  const navigator = useRouter();

  const onChange = (event: RadioChangeEvent) => {
    event.preventDefault();
    setMethod(event.target.value);
    setPaymentMethod(event.target.value);
  };

  const total = cartItems.reduce((prev, curr) => {
    return prev + curr.total;
  }, 0);

  const discountPrice = cartItems.reduce((prev, curr) => {
    return prev + curr.discountedPrice;
  }, 0);

  const totalQtty = cartItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  const onConfirmOrder = async (data: any) => {
    const obj: any = {
      ...emptyOrder,
      orderNo: generateOrderNumber(),
      products: cartItems.map((mp) => {
        return {
          productId: mp.productId,
          qtty: mp.quantity,
          amount: mp.amount,
        };
      }),
      status: "ORDERED",
      totalAmount: total - discountPrice,
      totalQtty: totalQtty,
      address: data.address,
      cellPhone: data.telephone,
      email: data.email,
      username: data.username,
    };
    try {
      const response = await OrderService.create(obj);

      if (response.success) {
        setCheckoutDrawerOpen(false);
        onFinish();
        message.success("Placing your order!");
        navigator.push("/");
        // set orderId
        setOrderId(response.data.id);
      }
      return response;
    } catch (error) {
      message.error("An error occured!");
      return error;
    }
  };

  useEffect(() => {
    const initPayment = async () => {
      if (orderId) {
        try {
          const transaction = await ProcessPaymentService.initPayment({
            amount: 50,
            description: "payment for your order",
            returnUrl: `${APP_URL}`,
          });
          setInitTransaction(transaction);
        } catch (error) {
          console.error("Payment initialization failed:", error);
        }
      }
    };

    initPayment();
  }, [method, orderId]);

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
        styles={{ wrapper: { width: "500px" } }}
      >
        <Space style={{ marginBottom: 20 }}>
          <Radio.Group size="large" onChange={onChange}>
            <Radio value="COD"> Cash On Delivery 💸 </Radio>
            <Radio value="MOMO"> Mobile Money Payment 💸 </Radio>
          </Radio.Group>
        </Space>

        <Form onFinish={onConfirmOrder} layout="vertical">
          <Form.Item
            label="Full name"
            name="username"
            rules={[{ required: true, message: "Please enter your full name" }]}
            style={{ marginBottom: 10 }}
          >
            <Input placeholder="Enter your full name..." />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
            style={{ marginBottom: 10 }}
          >
            <Input placeholder="Enter your email..." />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter your address" }]}
          >
            <Input placeholder="Enter your address..." />
          </Form.Item>

          <Form.Item
            label="Telephone"
            name="telephone"
            rules={[{ required: true, message: "Please enter your telephone" }]}
          >
            <Input placeholder="Enter your telephone..." />
          </Form.Item>

          <Space align="end" style={{ marginTop: 20 }}>
            <Button type="primary" htmlType="submit">
              Confirm Order
            </Button>
          </Space>
        </Form>
      </Drawer>
    </>
  );
};

export default function IndexPage() {
  const navigator = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isDeleting, setDeleting] = useState<boolean>(false);

  const { addToCard, clearItem, removeItem, loadCartItems } = useCart();
  const socket: any = useSocket();

  const handleCheckoutSubmit = () => {
    message.success("Your order has been placed successfully.");
    clearItem();
    navigator.push("/thank-you");
  };
  const handleCartEvent = (data: CartItem[]) => {
    console.log("Cart Event Received:", data);
    setCartItems(data); // Update the cartItems state with the received data
  };

  const handleRemoveCartItem = async (item: CartItem) => {
    setDeleting(true);
    try {
      await removeItem(item.id);
      const cartItems = await loadCartItems();
      setCartItems(cartItems);
    } catch (error) {}
    setDeleting(false);
  };

  const getCartSummary = () => {
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

    // const discountPercentage = data.reduce((prev, curr) => {
    //   return prev + curr.discountPercentage;
    // }, 0);

    return (
      <div style={{ margin: "3rem 0 1rem 0" }} className="services-text-box">
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

  useEffect(() => {
    if (socket) {
      socket.on("cart-items", handleCartEvent);
    }
  }, [socket, isDeleting]);

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
      <DefaultLayout
        title={"Store - LinkaVet | Quality Pet Products"}
        description={
          "Shop high-quality pet products at LinkaVet. From pet food to accessories, find everything your pet needs in our online store."
        }
        keywords="pet products, veterinary store, LinkaVet store, pet food, pet accessories, buy pet supplies"
        uri="store"
      >
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
                          <Button
                            type="link"
                            onClick={() => handleRemoveCartItem(record)}
                          >
                            <DeleteOutlined style={{ color: "red" }} />
                          </Button>
                        ),
                      },
                    ]}
                  />
                  <Typography.Paragraph>
                    {getCartSummary()}
                  </Typography.Paragraph>
                  <CheckoutCartBtn
                    cartItems={cartItems}
                    onFinish={() => handleCheckoutSubmit()}
                  />
                </div>
              </Col>
            ) : (
              <Col xs={22} md={16} style={{ textAlign: "center" }}>
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
