"use client";
import Sider from "antd/es/layout/Sider";
import { Layout, theme } from "antd";
import "./page-content.scss";
import Sidebar from "@components/sidebar/main-sider";
import React from "react";

const { Content } = Layout;

interface IProps{
  hasSider?: boolean;
  children: React.ReactNode
}
function PageContent(props: IProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const siderStyle: React.CSSProperties = {
    background: colorBgContainer,
  };

  const contentStyle: React.CSSProperties = {
    lineHeight: "auto",
    padding: "0 20px",
    width: "100%",
    maxWidth: "100%",
  };

  const { hasSider, children } = props;

  return (
    <div className="appBody">
      {hasSider && (
        <Sider
          style={siderStyle}
          width={180}
          breakpoint={"lg"}
          collapsedWidth={0}
          trigger={null}
        >
          <Sidebar />
        </Sider>
      )}

      <Content>{children}</Content>
    </div>
  );
}

export default PageContent;
