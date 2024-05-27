import {
  AppstoreOutlined,
  DashboardOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import Link from "next/link";

const AuthMenu = () => {
  const [current, setCurrent] = useState("home");
  const [user, setUser] = useState<any>("");

  const sibebarMenu = [
    {
      label: <Link href="dash-board">Dashboard</Link>,
      key: "dashboard",
      icon: <DashboardOutlined />,
    },
    {
      label: <Link href="inventory">Inventory</Link>,
      key: "inventory",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link href="orders">Orders</Link>,
      key: "orders",
      icon: <ShoppingCartOutlined />,
    },
    {
      label: <Link href="customers">Customers</Link>,
      key: "customers",
      icon: <UserOutlined />,
    },
    {
      label: <Link href="#logout">Log out</Link>,
      key: "logout",
      icon: <LogoutOutlined />,
    },
  ];

  const onClick = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
    if (e.key === "logout") {
      setTimeout(() => {
        setUser(null);
      }, 1000);
    }
    // navigator(`/${e.key}`);
  };

  return (
    <Menu
      mode="vertical"
      items={sibebarMenu}
      selectedKeys={[current]}
      theme="light"
      onClick={onClick}
      style={{ textAlign: "left" }}
    />
  );
};

export default AuthMenu;
