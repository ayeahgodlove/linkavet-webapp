import "./app-header.scss";
import ShoppingCart from "../shopping-cart/shopping-cart";
import { Typography } from "antd";
import Link from "next/link";
import MainMenu from "@components/menu/main-menu";
import SearchBox from "@components/search-box/search-box";

function AppHeader() {
  return (
    <div className="appHeader">
      <div className="menuHeader">
        <MainMenu />
      </div>
      <div className="appTitle">
        <Link href="/">
          <Typography.Title>Toni Store 🛍</Typography.Title>
        </Link>
      </div>
      <div className="rightHeader">
        <div className="searchCard">
          <SearchBox />
        </div>

        <div className="shoppingCart">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
