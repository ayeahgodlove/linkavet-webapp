"use client";
import { AppFooter } from "@components/footer/footer";
import { AppFootnote } from "@components/footnote/footnote";
import AppHeader from "@components/header/app-header";
import { Affix, Layout, theme } from "antd";
import React from "react";

const { Header, Content } = Layout;

interface Props {
  children: React.ReactNode;
}
const DefaultLayout = (props: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerStyle: React.CSSProperties = {
    background: colorBgContainer,
  };

  return (
    <>
      <Layout>
        <Affix offsetTop={0}>
          <Header className="appHeader" style={headerStyle}>
            <AppHeader />
          </Header>
        </Affix>
        <Content>
          <Layout
            style={{
              background: colorBgContainer,
            }}
          >
            {props.children}
          </Layout>
        </Content>

        <div>
          <AppFooter logoPath={"./logo/logo-2-removebg-preview.png"} />
          <AppFootnote />
        </div>
      </Layout>
    </>
  );
};

export default DefaultLayout;
