import "./app-header.scss";
import ShoppingCart from "../shopping-cart/shopping-cart";
import Link from "next/link";
import MainMenu from "@components/menu/main-menu";
import SearchBox from "@components/search-box/search-box";
import Image from "next/image";
import { useRef, useState } from "react";
import { Button, ConfigProvider, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import useWindowSize from "@hook/shared/window-resize.hook";

function AppHeader() {
  const [visible, setVisible] = useState(false);
  const menuBtnRef = useRef(null);
  const { width } = useWindowSize();

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#08a30a",
            colorLink: "#214e0a",
            fontFamily: "Poppins",
            fontSize: 16,
            fontWeightStrong: 500,
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <Image
              src={`/logo/logo-2-removebg-preview.png`}
              height={width > 768 ? 90 : 80}
              width={width > 768 ? 88 : 50}
              alt="linkavet logo"
              style={{
                marginRight: 15,
                aspectRatio: 10,
                objectFit: "contain",
                marginTop: 0,
              }}
              quality={100}
            />
          </Link>
        </div>
        <div className="menuHeader">
          <MainMenu
            menuBtnRef={menuBtnRef}
            visible={visible}
            setVisible={setVisible}
          />
        </div>
        <div className="rightHeader">
          <div className="searchCard">
            <SearchBox />
          </div>

          <Space size={"middle"}>
            <div className="shoppingCart">
              <ShoppingCart />
            </div>
            <Button
              className="menuBtn"
              type="dashed"
              icon={<MenuOutlined style={{ fontSize: 18 }} />}
              onClick={() => setVisible(true)}
              ref={menuBtnRef}
            />
          </Space>
        </div>
      </ConfigProvider>
    </>
  );
}

export default AppHeader;
