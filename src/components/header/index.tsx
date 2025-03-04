"use client";

import { MailOutlined } from "@ant-design/icons";
import { ColorModeContext } from "@contexts/color-mode";
import { IReview } from "@model/review.model";
import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";
import { useActiveAuthProvider, useGetIdentity } from "@refinedev/core";
import { reviewAPI } from "@store/api/review_api";
import {
  Layout as AntdLayout,
  Avatar,
  Badge,
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
  const authProvider = useActiveAuthProvider();
  const { data: user } = useGetIdentity<IUser>();

  const { mode, setMode } = useContext(ColorModeContext);
  const [comments, setComments] = useState<IReview[]>([]);
  const [isAuthenticated, setIsAuthencated] = useState<boolean>(false);

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

    authProvider
      ?.check()
      .then((resp) => {
        console.log("resp: ", resp);
        setIsAuthencated(resp.authenticated);
      })
      .catch((err) => console.log("err: ", err));
  }, [data, isAuthenticated]);

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

        <Switch
          checkedChildren="🌛"
          unCheckedChildren="🔆"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "dark"}
        />
        {isAuthenticated && (
          <Space style={{ marginLeft: "8px" }} size="middle">
            {user?.name && <Text strong>{user.name}</Text>}
            {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
          </Space>
        )}
      </Space>
    </AntdLayout.Header>
  );
};
