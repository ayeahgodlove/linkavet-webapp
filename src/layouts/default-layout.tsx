"use client";
import AppFooter from "@components/footer/app-footer";
import AppHeader from "@components/header/app-header";
import { Breadcrumb, Layout, theme } from "antd";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const { Header, Footer, Content } = Layout;

interface Props {
  children: React.ReactNode;
}
const DefaultLayout = (props: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [breadCrumbs, setBreadCrumbs] = useState([]);

  const headerStyle: React.CSSProperties = {
    overflow: "hidden",
    textAlign: "center",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    background: colorBgContainer,
    boxShadow: "1px 4px 4px #00000033",
    position: "fixed" /* Set the navbar to fixed position */,
    top: 0 /* Position the navbar at the top of the page */,
    width: "100%" /* Full width */,
    zIndex: 1,
  };

  const contentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    textAlign: "center",
    minHeight: 120,
    lineHeight: "auto",
    padding: "60px 50px 0px",
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    height: "60px",
    color: "azure",
    backgroundColor: "black",
  };

  const params = useParams();
  const cid = params.categoryId;
  const pid = params.productId;

  return (
    <>
      <Layout>
        <Header style={headerStyle}>
          <AppHeader />
        </Header>
        <Content style={contentStyle}>
          <Breadcrumb
            style={{
              margin: "16px 0",
              padding: "0px 15px",
            }}
            items={breadCrumbs}
          />
          <Layout
            style={{
                background: colorBgContainer,
            }}
          >
            {props.children}
          </Layout>
        </Content>

        <Footer style={footerStyle}>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
};

export default DefaultLayout;
