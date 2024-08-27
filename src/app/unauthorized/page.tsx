import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Result, Space, Tooltip, Typography } from "antd";

// pages/unauthorized.js
export default function IndexPage() {
  return (
    <Result
      status="warning"
      title="401"
      extra={
        <Space direction="vertical" size="large">
          <Space>
            <Typography.Text>Unauthorized</Typography.Text>
            <Tooltip title={"You do not have permission to access this page."}>
              <InfoCircleOutlined data-testid="error-component-tooltip" />
            </Tooltip>
          </Space>
          <Button type="primary">Back Home</Button>
        </Space>
      }
    />
  );
}
