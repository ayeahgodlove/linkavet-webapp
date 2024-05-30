import { Badge, Button, Drawer, List, Popover, Space, Typography } from "antd";
import "./auth-header.scss";
import {
  BellOutlined,
  CoffeeOutlined,
  MailOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getComments, getSingleCart } from "../../services/mock-endpoints";
import Link from "next/link";
import AuthMenu from "@components/menu/auth-menu";

function AuthHeader() {
  const [visible, setVisible] = useState(false);
  const [showingMessages, setShowingMessages] = useState(false);
  const [comments, setComments] = useState<any>([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments.slice(0, 10));
    });

    getSingleCart().then((res) => {
      setMessages(res.products.slice(0, 10));
    });
  }, []);

  return (
    <div className="appHeader">
      <div>
        <Button
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
          type="dashed"
          className="menuBtn"
        ></Button>

        <Drawer
          title="Toni Store"
          placement="left"
          onClose={() => setVisible(false)}
          open={visible}
        >
          <AuthMenu />
        </Drawer>
      </div>
      <div className="appTitle">
        <Link href="/admin/dash-board">
          <Typography.Title>
            <CoffeeOutlined style={{ fontSize: "24px" }} /> IamAdmin
          </Typography.Title>
        </Link>
      </div>
      <div className="appNotif">
        <Space size="middle">
          <Popover
            placement="bottom"
            trigger="click"
            title="Notifications"
            content={
              <List
                dataSource={comments}
                renderItem={(comment: any) => (
                  <List.Item>
                    <Typography.Text mark>
                      [{comment.user.username}]
                    </Typography.Text>{" "}
                    {comment.body}
                  </List.Item>
                )}
              ></List>
            }
          >
            <Badge dot className="appNotifStyle">
              <MailOutlined style={{ fontSize: "24px" }} />
            </Badge>
          </Popover>
          <Badge
            count={messages.length}
            className="appNotifStyle"
            // onClick={() => setShowingMessages(true) as any}
          >
            <BellOutlined style={{ fontSize: "24px" }} />
          </Badge>
          <Drawer
            title="New Messages"
            placement="right"
            onClose={() => setShowingMessages(false)}
            open={showingMessages}
          >
            <List
              dataSource={messages}
              renderItem={(message: any) => (
                <List.Item>
                  🔔 <Typography.Text strong>{message.title}</Typography.Text>{" "}
                  has been ordered
                </List.Item>
              )}
            ></List>
          </Drawer>
        </Space>
      </div>
    </div>
  );
}

export default AuthHeader;
