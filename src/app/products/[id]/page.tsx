"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Image,
  Input,
  Rate,
  Row,
  Skeleton,
  Space,
  Typography,
  message,
} from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import "./product.scss";
import { useRouter } from "next/navigation";
import { makeUpLabel } from "@utils";
import Link from "next/link";
import LayoutWithSidebar from "@layouts/layout-with-sidebar";
import PageContent from "@components/page-content/page-content";
import { productAPI } from "@store/api/product_api";
import { API_URL_UPLOADS_PRODUCTS } from "@constants/api-url";
import { IImage } from "@model/image.model";
import DefaultLayout from "@layouts/default-layout";
import { useCart } from "@hook/cart.hook";

export default function IndexPage({ params }: { params: { id: string } }) {
  const [cartQty, setCartQty] = useState<number>(1);
  const [loadingCheckOut, setLoadingCheckOut] = useState<boolean>(false);
  const [loadingAddToCart, setLoadingAddToCart] = useState<boolean>(false);
  const { addToCard } = useCart();
  const navigator = useRouter();
  const key = params.id;

  const { data, isLoading, isFetching } =
    productAPI.useGetSingleProductQuery(key);

  const handleAddToCart = () => {
    setLoadingAddToCart(true);

    message.success(`${data?.name} has been added to cart 👌`);
    if (data) {
      let addedItems = Array.from({ length: cartQty }, () => data);
      // addCartItems(addedItems.map(a=> {
      //   return {
      //     id: a.id,
      //     name: a.name,
      //     amount: a.amount,
      //     quantity: a.qtty,
      //     imageUrl: a.images[0].url,
      //     discountPercentage: data.discountPercentage,
      //     discountedPrice: 0,
      //     total: 0,
      //   }
      // }));
    }
    setTimeout(() => {
      setLoadingAddToCart(false);
    }, 1500);
  };

  const handleCheckout = () => {
    setLoadingCheckOut(true);

    message.success(`${data?.name} has been added to cart 👌`);
    if (data) {
      addToCard(data.id, data.qtty);
    }
    setTimeout(() => {
      setLoadingCheckOut(false);
      navigator.push("/cart");
    }, 1500);
  };

  useEffect(() => {}, [data, isLoading, isFetching]);

  return (
    <DefaultLayout
      title={"Vet Products - Your Pet's Wellbeing, Our Priority"}
      description={
        "Elevate your farm and pet's lifestyle with our premium range of nutrition, grooming essentials, toys, and wellness products. Each item is selected with your pet's health and happiness in mind. Shop confidently for top-quality products that complement our commitment to excellence in veterinary care. Enhance your pet's life today with Linkavet."
      }
      keywords="veterinary, pet care, store, products, LinkaVet, animal care"
      uri="products"
    >
      <PageContent hasSider>
        {isLoading || isFetching || data === undefined ? (
          <Row gutter={[8, 16]} wrap>
            <Col flex={2} xs={0} sm={0} md={10}>
              <div className="productInfoLeftPanel">
                <div className="mainThumbnail">
                  <Skeleton.Image active style={{ width: "200px" }} />
                </div>
                <div className="imageGallery">
                  <Space size={"middle"}>
                    <Skeleton.Image
                      active
                      style={{ width: "50px", height: "25px" }}
                    />
                    <Skeleton.Image
                      active
                      style={{ width: "50px", height: "25px" }}
                    />
                    <Skeleton.Image
                      active
                      style={{ width: "50px", height: "25px" }}
                    />
                    <Skeleton.Image
                      active
                      style={{ width: "50px", height: "25px" }}
                    />
                  </Space>
                </div>
              </div>
            </Col>
            <Col flex={3} sm={24} md={14}>
              <div className="productInfoRightPanel">
                <Skeleton.Input active size={"default"} />
                <div className="productRating">
                  <Space>
                    <Skeleton.Input active size={"small"} />
                    <Skeleton.Input active size={"small"} />
                  </Space>
                </div>
                <div className="productPrice">
                  <Skeleton.Input active size={"default"} />
                </div>
                <div className="productMeta">
                  <Skeleton
                    paragraph={{
                      rows: 3,
                    }}
                    active
                  />
                </div>
                <div className="productDesc">
                  <Skeleton
                    paragraph={{
                      rows: 1,
                    }}
                    active
                  />
                </div>
                <div className="addToCart">
                  <Space>
                    <Skeleton.Button active />
                    <Skeleton.Button active />
                  </Space>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Row gutter={[8, 16]} wrap style={{ paddingTop: 5 }}>
            <Col flex={2} xs={0} sm={0} md={10}>
              <div className="productInfoLeftPanel">
                <div className="mainThumbnail">
                  <Image
                    src={`${API_URL_UPLOADS_PRODUCTS}/${data.images[0]?.url}`}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                    alt={data.name}
                  />
                </div>
                <div className="imageGallery">
                  <Image.PreviewGroup
                    preview={{
                      onChange: (current, prev) =>
                        console.log(
                          `current index: ${current}, prev index: ${prev}`
                        ),
                    }}
                  >
                    <Space size={"middle"}>
                      {data.images.map((img: IImage, index: number) => (
                        <Image
                          src={`${API_URL_UPLOADS_PRODUCTS}/${img.url}`}
                          width={100}
                          key={index}
                          alt={img.name}
                        />
                      ))}
                    </Space>
                  </Image.PreviewGroup>
                </div>
              </div>
            </Col>
            <Col flex={3} sm={24} md={14}>
              <div className="productInfoRightPanel">
                <Typography.Title level={3}>{data.name}</Typography.Title>
                <div className="productRating">
                  <Space>
                    <Rate value={data.rating} allowHalf disabled></Rate>
                    <Typography.Text strong>{"Hanco Inc"}</Typography.Text>
                  </Space>
                </div>
                <div className="productPrice">
                  Price:{" "}
                  <span className="spanPrice">
                    {parseFloat(
                      (
                        (data.amount * (100 - data.discountPercentage)) /
                        100
                      ).toString()
                    ).toFixed(0)}
                  </span>{" "}
                  <Typography.Text
                    style={{
                      background: "red",
                      color: "yellow",
                      padding: "0 5px",
                      borderRadius: "4px",
                      fontSize: "1rem",
                    }}
                  >
                    {parseFloat(data.discountPercentage.toString()).toFixed(0)}%
                    OFF
                  </Typography.Text>{" "}
                  <Typography.Text
                    delete
                    strong
                    type="danger"
                    style={{
                      fontSize: "1rem",
                    }}
                  >
                    {data.amount}
                  </Typography.Text>
                </div>
                <div className="productMeta">
                  <div className="productMetaRow">
                    <span className="productMetaLeft">Category</span>
                    <span className="productMetaRight">
                      <Link href={`/products/categories/${data.category.id}`}>
                        {makeUpLabel(data.category)}
                      </Link>
                    </span>
                  </div>
                  <div className="productMetaRow">
                    <span className="productMetaLeft">Delivery</span>
                    <span className="productMetaRight">FREE Delivery 📦</span>
                  </div>
                  <div className="productMetaRow">
                    <span className="productMetaLeft">Quantity</span>
                    <div className="productMetaRight">
                      <Button
                        onClick={() =>
                          setCartQty(cartQty > 0 ? cartQty - 1 : 0)
                        }
                        className="updownQty"
                      >
                        <MinusOutlined />
                      </Button>
                      <Input value={cartQty} min={0} className="cartQty" />
                      <Button
                        onClick={() => setCartQty(cartQty + 1)}
                        className="updownQty"
                      >
                        <PlusOutlined />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="productDesc">
                  <Typography.Text strong> {data.description}</Typography.Text>
                </div>

                <div className="addToCart">
                  <Space>
                    <Button
                      type="primary"
                      onClick={handleAddToCart}
                      loading={loadingAddToCart}
                    >
                      Add To cart
                    </Button>
                    <Button
                      type="primary"
                      danger
                      onClick={handleCheckout}
                      loading={loadingCheckOut}
                    >
                      Checkout
                    </Button>
                  </Space>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </PageContent>
    </DefaultLayout>
  );
}
