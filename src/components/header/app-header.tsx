import "./app-header.scss";
import ShoppingCart from "../shopping-cart/shopping-cart";
import Link from "next/link";
import MainMenu from "@components/menu/main-menu";
import SearchBox from "@components/search-box/search-box";
import Image from "next/image";
import { useRef, useState } from "react";
import { Button, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";

function AppHeader() {
  const [visible, setVisible] = useState(false);
  const menuBtnRef = useRef(null);

  return (
    <div className="appHeader">
      <div className="appTitle">
        <Link href="/">
          <Image
            src={`/honeyman.png`}
            height={60}
            width={80}
            quality={100}
            alt="Honeyman logo"
            style={{ marginRight: 15, aspectRatio: 10 }}
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
    </div>
  );
}

export default AppHeader;
