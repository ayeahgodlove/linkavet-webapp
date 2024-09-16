import { Typography, Descriptions, Row, Col } from "antd";

const { Title, Text } = Typography;

export const SuccessPaymentDetails = ({ data }: { data: any }) => {
  const paymentData = data.data.payer;

  return (
    <Row gutter={[16, 16]} justify="center" style={{ padding: "20px" }}>
      <Col span={24}>
        <Title level={3}>Payers Details</Title>

        <Descriptions bordered size="middle">
          <Descriptions.Item
            label={<Typography.Title level={5}>Account ID</Typography.Title>}
          >
            {paymentData.accountId}
          </Descriptions.Item>
          <Descriptions.Item
            label={<Typography.Title level={5}>Amount</Typography.Title>}
          >
            {paymentData.amount} {paymentData.currencyCode}
          </Descriptions.Item>
          <Descriptions.Item
            label={
              <Typography.Title level={5}>Payment Method</Typography.Title>
            }
          >
            {paymentData.paymentMethod}
          </Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  );
};
