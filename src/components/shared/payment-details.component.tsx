import { Typography, Descriptions, Button, Row, Col } from "antd";

const { Title, Text } = Typography;

export const PaymentDetails = ({ data }: { data: any }) => {
  debugger
  const paymentData = data.data;

  return (
    <Row gutter={[16, 16]} justify="center" style={{ padding: "20px" }}>
      <Col span={24}>
        <Title level={2}>Payment Details</Title>

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
            {paymentData.status}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <Typography.Title level={5}>Transaction Status</Typography.Title>
            }
          >
            {paymentData.transactionStatus}
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
        <Button
          type="primary"
          href={paymentData.links.paymentAuthUrl}
          target="_blank"
          style={{ marginTop: "10px" }}
        >
          Authorize Payment
        </Button>
      </Col>
    </Row>
  );
};


export const dummyData = {
  "data": {
    "requestId": "REQ240911U61BD2A9YVA",
    "amount": 50,
    "currencyCode": "XAF",
    "description": "A plate of fufu and eru",
    "mobileWalletNumber": null,
    "status": "PENDING",
    "transactionStatus": "PENDING",
    "createdAt": "2024-09-11T18:05:19+00:00",
    "mchTransactionRef": "myorder234555666",
    "appId": "apnthte7t4gemh",
    "payerNote": "",
    "serviceDiscountAmount": null,
    "receivingEntityName": null,
    "transactionTag": null,
    "links": {
      "returnUrl": "http://localhost:3000/",
      "cancelUrl": null,
      "paymentAuthUrl": "https://pay.tranzak.net/?rid=REQ240911U61BD2A9YVA"
    }
  },
  "success": true
};