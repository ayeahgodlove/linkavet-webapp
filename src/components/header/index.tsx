"use client";

import { BellOutlined, MailOutlined } from "@ant-design/icons";
import { ColorModeContext } from "@contexts/color-mode";
import { IReview } from "@model/review.model";
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";
import { useGetIdentity } from "@refinedev/core";
import { getSingleCart } from "@services/cart.service";
import { reviewAPI } from "@store/api/review_api";
import {
  Layout as AntdLayout,
  Avatar,
  Badge,
  Drawer,
  List,
  Popover,
  Space,
  Switch,
  Typography,
  theme,
} from "antd";
import React, { useContext, useEffect, useState } from "react";

const { Text } = Typography;
const { useToken } = theme;

type IUser = {
  id: number;
  name: string;
  avatar: string;
};

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
  sticky,
}) => {
  const { token } = useToken();
  const { data: user } = useGetIdentity<IUser>();
  const { mode, setMode } = useContext(ColorModeContext);
  const [showingMessages, setShowingMessages] = useState(false);
  const [comments, setComments] = useState<IReview[]>([]);
  const [messages, setMessages] = useState([]);

  const { data } = reviewAPI.useFetchAllReviewsQuery();

  const headerStyles: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px 24px",
    height: "64px",
  };

  if (sticky) {
    headerStyles.position = "sticky";
    headerStyles.top = 0;
    headerStyles.zIndex = 1; 
  }

  useEffect(() => {
    setComments(data!);

    getSingleCart().then((res) => {
      setMessages(res.products.slice(0, 10));
    });
  }, [data]);

  return (
    <AntdLayout.Header style={headerStyles}>
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
                🔔 <Typography.Text strong>{message.title}</Typography.Text> has
                been ordered
              </List.Item>
            )}
          ></List>
        </Drawer>
        <Switch
          checkedChildren="🌛"
          unCheckedChildren="🔆"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "dark"}
        />
        {(user?.name || user?.avatar) && (
          <Space style={{ marginLeft: "8px" }} size="middle">
            {user?.name && <Text strong>{user.name}</Text>}
            {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
          </Space>
        )}
      </Space>
    </AntdLayout.Header>
  );
};
