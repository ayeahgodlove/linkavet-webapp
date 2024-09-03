"use client";
import { AppFooter } from "@components/footer/footer";
import { AppFootnote } from "@components/footnote/footnote";
import AppHeader from "@components/header/app-header";
import { SEOHead } from "@components/shared/seo-head.component";
import useWindowSize from "@hook/shared/window-resize.hook";
import { Affix, Layout, theme } from "antd";
import React from "react";

const { Header, Content } = Layout;

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string;
  uri?: string;
}
const DefaultLayout = (props: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { width } = useWindowSize();

  const headerStyle: React.CSSProperties = {
    background: colorBgContainer,
    padding: width > 768 ? "0 50px" : "0 20px",
  };

  return (
    <>
      <SEOHead
        title={props.title}
        description={props.description}
        keywords={props.keywords}
        uri={props.uri}
      />
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
