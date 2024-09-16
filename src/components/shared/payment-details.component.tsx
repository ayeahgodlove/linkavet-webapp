import { Typography, Descriptions, Button, Row, Col, Badge } from "antd";

const { Title, Text } = Typography;

export const PaymentDetails = ({ data }: { data: any }) => {
  const paymentData = data.data;

  return (
    <Row gutter={[16, 16]} justify="center" style={{ padding: "20px" }}>
      <Col span={24}>
        <Title level={3}>Transaction Details</Title>

        <Descriptions bordered size="middle">
          <Descriptions.Item
            label={<Typography.Title level={5}>Request ID</Typography.Title>}
          >
            {paymentData.requestId}
          </Descriptions.Item>
          <Descriptions.Item
            label={<Typography.Title level={5}>Amount</Typography.Title>}
          >
            {paymentData.amount} {paymentData.currencyCode}
          </Descriptions.Item>
          <Descriptions.Item
            label={<Typography.Title level={5}>Description</Typography.Title>}
          >
            {paymentData.description}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <Typography.Title level={5}>
                Mobile Wallet Number
              </Typography.Title>
            }
          >
            {paymentData.mobileWalletNumber || "N/A"}
          </Descriptions.Item>
          <Descriptions.Item
            label={<Typography.Title level={5}>Status</Typography.Title>}
          >
            <Badge
              status={
                paymentData.status === "SUCCESSFUL" ? "success" : "processing"
              }
              text={paymentData.status}
            />
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <Typography.Title level={5}>Transaction Status</Typography.Title>
            }
          >
            <Badge
              status={
                paymentData.transactionStatus === "SUCCESSFUL"
                  ? "success"
                  : "processing"
              }
              text={paymentData.transactionStatus}
            />
          </Descriptions.Item>
          <Descriptions.Item
            label={<Typography.Title level={5}>Payment At</Typography.Title>}
          >
            {new Date(paymentData.createdAt).toLocaleString()}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <Typography.Title level={5}>
                Merchant Transaction Reference
              </Typography.Title>
            }
          >
            {paymentData.mchTransactionRef}
          </Descriptions.Item>
          <Descriptions.Item
            label={<Typography.Title level={5}>Payer Note</Typography.Title>}
          >
            {paymentData.payerNote || "N/A"}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <Typography.Title level={5}>
                Service Discount Amount
              </Typography.Title>
            }
          >
            {paymentData.serviceDiscountAmount || "N/A"}
          </Descriptions.Item>
          <Descriptions.Item
            label={<Typography.Title level={5}>Receiver</Typography.Title>}
          >
            {paymentData.receivingEntityName || "N/A"}
          </Descriptions.Item>
        </Descriptions>
      </Col>

      <Col span={24} style={{ marginTop: "20px" }}>
        <Text>To authorize the payment, please click the button below:</Text>
        <br />
        {paymentData.status === "PENDING" ? (
          <Button
            type="primary"
            href={paymentData.links.paymentAuthUrl}
            target="_blank"
            style={{ marginTop: "10px" }}
          >
            Authorize Payment
          </Button>
        ) : (
          <Button
            type="primary"
            href={paymentData.links.paymentAuthUrl}
            target="_blank"
            style={{ marginTop: "10px" }}
          >
            Save Receipt
          </Button>
        )}
      </Col>
    </Row>
  );
};

export const dummyData = {
  data: {
    requestId: "",
    amount: 0,
    currencyCode: "",
    description: "",
    mobileWalletNumber: null,
    status: "PENDING",
    transactionStatus: "",
    createdAt: "",
    mchTransactionRef: "myorder234555666",
    appId: "apnthte7t4gemh",
    payerNote: "",
    serviceDiscountAmount: null,
    receivingEntityName: null,
    transactionTag: null,
    links: {
      returnUrl: "",
      cancelUrl: null,
      paymentAuthUrl: "",
    },
  },
  success: true,
};
