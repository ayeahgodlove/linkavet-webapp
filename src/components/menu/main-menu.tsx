"use client";
import React, { useEffect } from "react";
import { Menu, Drawer } from "antd";
import { Dispatch, MutableRefObject, SetStateAction, useState } from "react";
import useOnScreen from "../../utils";
import Link from "next/link";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import {
  MdOutlineArticle,
  MdOutlineLibraryBooks,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { FiHome, FiInfo, FiPhoneCall } from "react-icons/fi";
import { GrServices } from "react-icons/gr";
import { FcBusinessContact } from "react-icons/fc";
import { usePathname } from "next/navigation";

interface Props {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  menuBtnRef: MutableRefObject<null>;
}
const MainMenu: React.FC<Props> = ({ visible, setVisible, menuBtnRef }) => {
  const pathname = usePathname();

  console.log("pathname: ", pathname)

  const menuMobile = [
    {
      label: (
        <Link href="/home" style={{ padding: 0 }}>
          Home
        </Link>
      ),
      key: "home",
      icon: <FiHome size={21} />,
      className: `nav-link link-active`,
    },
    {
      label: (
        <Link href="/about-us" style={{ padding: 0 }}>
          About-us
        </Link>
      ),
      key: "about-us",
      icon: <FcBusinessContact size={21} />,
      className: `nav-link link-active`,
    },
    {
      label: (
        <Link href="/services" style={{ padding: 0 }}>
          Services
        </Link>
      ),
      key: "services",
      icon: <GrServices size={21} />,
      className: `nav-link link-active`,
    },
    {
      label: (
        <Link href="/store" style={{ padding: 0 }}>
          Store
        </Link>
      ),
      key: "store",
      icon: <MdOutlineProductionQuantityLimits size={21} />,
      className: `nav-link link-active`,
    },

    {
      label: (
        <Link href="/posts" style={{ padding: 0 }}>
          Posts
        </Link>
      ),
      key: "posts",
      icon: <MdOutlineArticle size={21} />,
      className: `nav-link link-active`,
    },
    {
      label: (
        <Link href="/courses" style={{ padding: 0 }}>
          Courses
        </Link>
      ),
      key: "courses",
      icon: <MdOutlineLibraryBooks size={21} />,
      className: `nav-link link-active`,
    },
    {
      label: (
        <Link href="/contact-us" style={{ padding: 0 }}>
          Contact Us
        </Link>
      ),
      key: "contact-us",
      icon: <FiPhoneCall size={21} />,
      className: `nav-link link-active`,
    },
    {
      label: (
        <Link href="/faqs" style={{ padding: 0 }}>
          Faqs
        </Link>
      ),
      key: "faqs",
      icon: <FiInfo size={21} />,
      className: `nav-link link-active`,
    },
  ];

  const menuLgScreen: ItemType<MenuItemType>[] = [
    {
      label: (
        <Link href="/" style={{ padding: 0 }}>
          Home
        </Link>
      ),
      key: "home",
      className: `nav-link link-active`,
    },
    {
      label: (
        <Link href="/about-us" style={{ padding: 0 }}>
          About-us
        </Link>
      ),
      key: "about-us",
      className: `nav-link link-active`,
    },
    {
      label: (
        <Link href="/services" style={{ padding: 0 }}>
          Services
        </Link>
      ),
      key: "services",
      className: `nav-link link-active`,
    },
    {
      label: (
        <Link href="/store" style={{ padding: 0 }}>
          Store
        </Link>
      ),
      key: "store",
      className: `nav-link link-active`,
    },

    {
      label: (
        <Link href="/posts" style={{ padding: 0 }}>
          Posts
        </Link>
      ),
      key: "posts",
      className: `nav-link link-active`,
    },
    {
      label: (
        <Link href="/courses" style={{ padding: 0 }}>
          Courses
        </Link>
      ),
      key: "courses",
      className: `nav-link link-active`,
    },
    {
      label: (
        <Link href="/contact-us" style={{ padding: 0 }}>
          Contact Us
        </Link>
      ),
      key: "contact-us",
      className: `nav-link link-active`,
    },
    {
      label: (
        <Link href="/faqs" style={{ padding: 0 }}>
          Faqs
        </Link>
      ),
      key: "faqs",
      className: `nav-link link-active`,
    },
  ];

  const MenuShowing = ({
    mode = "horizontal",
    visible = true,
    menuItems,
    className,
  }: {
    mode?: "horizontal" | "vertical" | "inline";
    visible?: boolean;
    menuItems: any[];
    className: string;
  }) => {
    return visible ? (
      <Menu
        selectedKeys={[pathname]}
        defaultSelectedKeys={[pathname]}
        mode={mode}
        items={menuItems}
        theme="light"
        className={`${className}`}
      />
    ) : (
      <></>
    );
  };

  const menuBtnVisible = useOnScreen(menuBtnRef);

  return (
    <>
      <MenuShowing
        visible={!menuBtnVisible}
        menuItems={menuLgScreen}
        className="mainMenu-lg"
      />

      <Drawer
        title="Linkavet LTD"
        placement="left"
        onClose={() => setVisible(false)}
        open={visible}
      >
        <MenuShowing mode="inline" menuItems={menuMobile} className="" />
      </Drawer>
    </>
  );
};

export default MainMenu;
