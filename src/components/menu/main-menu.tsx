import { Menu, Drawer } from "antd";
import { Dispatch, MutableRefObject, SetStateAction, useState } from "react";
import useOnScreen from "../../utils";
import Link from "next/link";

interface Props {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  menuBtnRef: MutableRefObject<null>;
}
const MainMenu: React.FC<Props> = ({ visible, setVisible, menuBtnRef }) => {
  const [current, setCurrent] = useState("home");

  const onClick = (e: any) => {
    setCurrent(e.key);
    setVisible(false);
  };

  const menuMobile = [
    {
      label: <Link href="/products/categories/smartphones">Smartphones</Link>,
      key: "smartphones",
    },
    {
      label: <Link href="/products/categories/laptops">Laptops</Link>,
      key: "laptops",
    },
    {
      label: "Men Accessories",
      key: "menAccessories",
      children: [
        {
          label: <Link href="/products/categories/mens-shirts">Shirts</Link>,
          key: "menShirts",
        },
        {
          label: <Link href="/products/categories/mens-shoes">Shoes</Link>,
          key: "menShoes",
        },
        {
          label: <Link href="/products/categories/mens-watches">Watches</Link>,
          key: "menWatches",
        },
      ],
    },
    {
      label: "Women Accessories",
      key: "womenAccessories",
      children: [
        {
          label: (
            <Link href="/products/categories/womens-dresses">Dresses</Link>
          ),
          key: "womenDresses",
        },
        {
          label: <Link href="/products/categories/womens-shoes">Shoes</Link>,
          key: "womenShoes",
        },
        {
          label: (
            <Link href="/products/categories/womens-watches">Watches</Link>
          ),
          key: "womenWatches",
        },
        {
          label: <Link href="/products/categories/womens-bags">Bags</Link>,
          key: "womenBags",
        },
        {
          label: (
            <Link href="/products/categories/womens-jewellery">Jewellery</Link>
          ),
          key: "womenJewellery",
        },
      ],
    },
    {
      label: <Link href="/about">About</Link>,
      key: "about",
    },
  ];

  const menuLgScreen = [
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
        onClick={onClick}
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
        title="Toni Store"
        placement="left"
        onClose={() => setVisible(false)}
        open={visible}
      >
        <MenuShowing
          mode="inline"
          menuItems={menuMobile}
          className=""
        />
      </Drawer>
    </>
  );
};

export default MainMenu;
