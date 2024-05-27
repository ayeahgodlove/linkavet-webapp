import { Layout, theme } from "antd";
import {  useEffect, useState } from "react";
import AuthHeader from "@components/header/auth-header";
import AppFooter from "@components/footer/app-footer";
import AuthSider from "@components/sidebar/auth-sider";
const { Header, Footer, Content } = Layout;

interface Props {
  children: React.ReactNode
}
function AuthLayout(props: Props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerStyle: React.CSSProperties = {
    overflow: "hidden",
    textAlign: "center",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    background: colorBgContainer,
    boxShadow: "1px 4px 4px #00000033",
    width: "100%" /* Full width */,
  };

  const bodyStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    lineHeight: "auto",
    margin: "20px 0",
  };

  const contentStyle: React.CSSProperties = {
    lineHeight: "auto",
    padding: "20px",
    margin: "10px",
    background: colorBgContainer,
  };

  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    height: "60px",
    color: "azure",
    backgroundColor: "black",
  };

  const [ user, setUser ] = useState<any>(null);
  const userInfo = localStorage.getItem("user");

  useEffect(() => {
    if (!!userInfo) setUser(JSON.parse(userInfo));
  }, []);

  useEffect(() => {
    if (!!user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.setItem("user", "");
  }, [user]);

  if (!user || !userInfo) {
    console.log("🚀 ~ file: AuthLayout.js:61 ~ AuthLayout ~ user:", user);

    // user is not authenticated
    // return <Navigate to="/login" />;
  }

  return (
    <>
      {!!user ? (
        <>
          <Header style={headerStyle}>
            <AuthHeader />
          </Header>
          <Content style={bodyStyle}>
            <Layout>
              <AuthSider />
              <Content style={contentStyle}>
                {props.children}
              </Content>
            </Layout>
          </Content>
        </>
      ) : (
        <>
          <Content style={bodyStyle}>
            {props.children}
          </Content>
        </>
      )}

      <Footer style={footerStyle}>
        <AppFooter />
      </Footer>
    </>
  );
}

export default AuthLayout;
