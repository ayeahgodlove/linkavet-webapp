"use client";
import { Menu, Drawer } from "antd";
import { Dispatch, MutableRefObject, SetStateAction, useState } from "react";
import useOnScreen from "../../utils";
import Link from "next/link";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { useParams } from "next/navigation";
interface Props {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  menuBtnRef: MutableRefObject<null>;
}
const MainMenu: React.FC<Props> = ({ visible, setVisible, menuBtnRef }) => {
  const [current, setCurrent] = useState("home");
  const router = useParams();
  const currentPath = router;
  console.log(currentPath);
  const onClick = (e: any) => {
    setCurrent(e.key);
    setVisible(false);
  };

  const menuMobile = [
    {
      label: <Link href="/products/categories/honey">Honey</Link>,
      key: "honey",
    },
    {
      label: (
        <Link href="/products/categories/honey-products">Honey Products</Link>
      ),
      key: "honey-products",
      children: [
        {
          label: <Link href="/products/categories/wax">Wax</Link>,
          key: "wax",
        },
        {
          label: <Link href="/products/categories/wine">Wine</Link>,
          key: "wine",
        },
      ],
    },
    {
      label: "Accessories",
      key: "Accessories",
      children: [
        {
          label: <Link href="/products/categories/bee-suit">Bee Suit</Link>,
          key: "bee-suit",
        },
        {
          label: <Link href="/products/categories/gloves">Gloves</Link>,
          key: "gloves",
        },
        {
          label: <Link href="/products/categories/smoker">Smoker</Link>,
          key: "smoker",
        },
        {
          label: <Link href="/products/categories/veil">Veil</Link>,
          key: "veil",
        },
        {
          label: <Link href="/products/categories/brush">Brush</Link>,
          key: "brush",
        },
        {
          label: <Link href="/products/categories/honey-extractor">Honey Extractor</Link>,
          key: "honey-extractor",
        },
      ],
    },
    {
      label: <Link href="/contact_us">Contact_us</Link>,
      key: "contact_us",
    },
    {
      label: <Link href="/about_us">About_us</Link>,
      key: "about_us",
    },
  ];

  const menuLgScreen: ItemType<MenuItemType>[] = [
    {
      label: <Link href="/">Home</Link>,
      key: "home",
    },
    ...menuMobile,
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
        // onClick={onClick}
        selectedKeys={[current]}
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
        title="Honeyman Shop"
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
