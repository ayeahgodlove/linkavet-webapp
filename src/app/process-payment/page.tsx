"use client";

import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";
import { Suspense, useEffect, useState } from "react";
import { useInitTransaction } from "@hook/init-transaction.hook";
import { ProcessPaymentService } from "@services/process-payment.service";
import { API_URL_UPLOADS_PRODUCTS, APP_URL } from "@constants/api-url";
import { useSearchParams } from "next/navigation";
import { Typography, Row, Col, Spin, Table, Avatar } from "antd";
import { CartItem } from "@model/cart-item.model";
import { useSocket } from "@contexts/socket-provider.context";
import { format } from "@utils/format";
import { getCartSummary } from "@components/shared/cart-summary-table.component";
import { useCart } from "@hook/cart.hook";
import {
  dummyData,
  PaymentDetails,
} from "@components/shared/payment-details.component";
import { SuccessPaymentDetails } from "@components/shared/success-details.component";

const { Title, Text } = Typography;

export default function IndexPage() {
  const { setInitTransaction, initTransaction } = useInitTransaction();
  const params = useSearchParams();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // const [transactionStatus, setTransactionStatus] = useState<any>();
  const socket: any = useSocket();

  const { clearItem } = useCart();

  const orderId = params.get("orderId");
  const method = params.get("method");
  const success = params.get("success");
  const requestId = params.get("requestId");

  const handleCartEvent = (data: CartItem[]) => {
    console.log("Cart Event Received:", data);
    setCartItems(data); // Update the cartItems state with the received data
  };

  useEffect(() => {
    if (socket) {
      socket.on("cart-items", handleCartEvent);
    }

    const initPayment = async () => {
      if (orderId) {
        try {
          const transaction = await ProcessPaymentService.initPayment({
            amount: 50,
            description: "payment for your order",
            returnUrl: `${APP_URL}/process-payment?${new URLSearchParams({
              orderId: `${orderId}`,
              method: `${method}`,
            }).toString()}`,
          });
          setInitTransaction(transaction);
        } catch (error) {
          console.error("Payment initialization failed:", error);
        }
      }
    };

    const getTransactionStatus = async (requestId: string) => {
      if (requestId) {
        try {
          debugger;
          const transaction = await ProcessPaymentService.transactionStatus(
            requestId
          );
          setInitTransaction(transaction.data);
        } catch (error) {
          console.error("Payment initialization failed:", error);
        }
      }
    };

    if (method === "MOMO") {
      initPayment();
    }
    if (success) {
      clearItem();
      getTransactionStatus(requestId!);
      // setInitTransaction(transactionStatus);
    }
  }, [socket, orderId, method, success, requestId]);

  console.log("transt-status: ", initTransaction);

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
        title={"Process Order"}
        description={
          "Stay informed and connected with the latest trends, insights, and valuable tips in pet care. Our blog at Linkavet is a trusted resource for pet parents, filled with expert advice from our experienced veterinary team. Explore a variety of topics, from health and nutrition to behavior and training. Empower yourself with knowledge and become a proactive and knowledgeable pet owner. For the love of your furry friends, Linkavet is your go-to destination for insightful pet-related content"
        }
        keywords="veterinary, pet care, blog posts, LinkaVet, animal care"
        uri="posts"
      >
        <PageContent>
          <Row
            gutter={[100, 0]}
            align={"middle"}
            justify={"center"}
            style={{ margin: "2rem 0" }}
          >
            {initTransaction === undefined ? (
              <Col xs={22} md={18}>
                <Spin
                  size="large"
                  style={{
                    minHeight: "65vh",
                    display: "flex",
                    justifyContent: "center",
                    // alignItems: "center",
                  }}
                />
              </Col>
            ) : (
              <>
                {cartItems && cartItems.length > 0 ? (
                  <Col xs={22} md={18}>
                    <div
                      className="payment-overview"
                      style={{ marginBottom: 15 }}
                    >
                      <Title level={2}>Processing Your Payment</Title>
                      <Text>
                        Please do not close or refresh this page while we
                        process your payment. The process may take a few
                        moments.
                      </Text>
                    </div>

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
                          render: (value, record, index) =>
                            record.product?.name,
                        },
                        {
                          title: "Quantity",
                          dataIndex: "quantity",
                          width: 120,
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
                      ]}
                    />
                    <Typography.Paragraph>
                      {getCartSummary(cartItems)}
                    </Typography.Paragraph>
                  </Col>
                ) : (
                  <Col xs={22} md={18}>
                    <div
                      className="payment-overview"
                      style={{ marginBottom: 15 }}
                    >
                      <SuccessPaymentDetails data={initTransaction} />
                    </div>
                  </Col>
                )}

                <Col xs={22} md={18}>
                  <div className="payment-instructions">
                    <PaymentDetails
                      data={initTransaction ? initTransaction : null}
                    />
                  </div>
                </Col>
              </>
            )}

            <Col xs={22} md={18}>
              <div className="payment-support">
                <Title level={4}>Need Help?</Title>
                <Text>
                  If you encounter any issues with your payment, please contact
                  our support team at{" "}
                  <a href="mailto:support@example.com">support@example.com</a>.
                </Text>
              </div>
            </Col>
          </Row>
        </PageContent>
      </DefaultLayout>
    </Suspense>
  );
}
