"use client";
import { API_URL_UPLOADS_PRODUCTS } from "@constants/api-url";
import { useCart } from "@hook/cart.hook";
import DefaultLayout from "@layouts/default-layout";
import { useIsAuthenticated } from "@refinedev/core";
import { productAPI } from "@store/api/product_api";
import { format } from "@utils/format";
import {
  Button,
  Col,
  Collapse,
  CollapseProps,
  Form,
  Image,
  InputNumber,
  notification,
  Row,
  Skeleton,
  Space,
  Spin,
  Typography,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Suspense, useCallback } from "react";

export default function IndexPage({ params }: { params: { id: string } }) {
  const [api, contextHolder] = notification.useNotification();
  const { data: item } = useIsAuthenticated();
  const key = params.id;
  const navigator = useRouter();

  const {
    data: product,
    isLoading,
    isFetching,
  } = productAPI.useGetSingleProductQuery(key);

  const { addToCard } = useCart();

  const onAddToCart = useCallback(
    async (values: any) => {
      console.log("values: ", JSON.stringify(values));
      if (item?.authenticated) {
        await addToCard(product ? product.id : "", values.quantity);
      } else {
        openNotification();
      }
    },
    [addToCard]
  );

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          Close
        </Button>
        <Button
          type="primary"
          size="small"
          onClick={() => navigator.push("/login")}
        >
          Sign-in
        </Button>
      </Space>
    );
    api.open({
      message: <Typography.Title level={5}>Sign-In Required</Typography.Title>,
      description:
        "To add items to your cart, please sign in to your account. If you don't have an account, you can easily create one in just a few steps.",
      btn,
      key,
      // onClose: close,
    });
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Description",
      children: <div>{product?.description}</div>,
    },
    {
      key: "2",
      label: "Delivery",
      children: (
        <div>
          After we receive your payment you will get a purchase confirmation
          that will deliver immediately your product.
        </div>
      ),
    },
  ];

  return (
    <>
      <Suspense
        fallback={
          <Spin
            size="large"
            style={{
              minHeight: "65vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        }
      >
        {contextHolder}
        <DefaultLayout
          title={`Store - LinkaVet | ${product?.name}`}
          description={`${product?.shortDescription}`}
          uri={`store/${params.id}`}
          keywords="pet products, veterinary store, LinkaVet store, pet food, pet accessories, buy pet supplies"
        >
          <div id="Intro" className="content-section product-page">
            <div className="content-wrapper w-container">
              <div>
                <Link href="/" className="breadcrumb-link">
                  Home
                </Link>
                <div className="breadcrumb">&gt;</div>
                <Link href="/store" className="breadcrumb-link">
                  Store
                </Link>
                <div className="breadcrumb">&gt;</div>
                <div className="breadcrumb-text">{product?.name}</div>
              </div>
              {isLoading || isFetching || product === undefined ? (
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
                <div id="Top" className="flex">
                  <div className="featured-left">
                    {product.productImages.map((pm, index) => {
                      return (
                        <div key={index}>
                          <Image
                            className={`image-${index + 1}`}
                            data-wf-sku-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22default-sku%3Amain-image%22%3A%7B%22exists%22%3A%22yes%22%2C%22type%22%3A%22ImageRef%22%7D%7D%7D%2C%22timezone%22%3A%22America%2FMexico_City%22%7D"
                            src={`${API_URL_UPLOADS_PRODUCTS}/${pm}`}
                            width="70"
                            alt={product.name}
                            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                            loading="lazy"
                            style={{
                              width: "100%",
                              marginBottom: "20px",
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="product-right">
                    <div className="product-description">
                      <div>
                        <h1 className="product-name">{product.name}</h1>
                        <div
                          data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                          className="price-no-link"
                        >
                          {parseFloat(
                            (
                              (product.amount *
                                (100 - product.discountPercentage)) /
                              100
                            ).toString()
                          ).toFixed(0)}
                        </div>
                        <div
                          data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                          className="compare-at-price"
                        >
                          {format.number(product.amount) + " XAF"}
                        </div>
                        <div className="top-margin _5-pixels">
                          <div className="hero-subtitle">
                            {product.shortDescription}
                          </div>
                        </div>
                        <div className="top-margin">
                          <div>
                            <Form
                              className="w-commerce-commerceaddtocartform"
                              onFinish={onAddToCart}
                              layout="horizontal"
                            >
                              <Form.Item
                                label={"Quantity"}
                                name={"quantity"}
                                className="field-label"
                              >
                                <InputNumber
                                  size="large"
                                  type="number"
                                  pattern="^[0-9]+$"
                                  inputMode="numeric"
                                  min={1}
                                  className="w-commerce-commerceaddtocartquantityinput quantity-box"
                                  defaultValue={1}
                                  style={{
                                    textAlign: "right",
                                    width: "100%",
                                    textAlignLast: "right",
                                    padding: "0 1rem",
                                  }}
                                />
                              </Form.Item>
                              <Button
                                type="primary"
                                htmlType="submit"
                                data-node-type="commerce-add-to-cart-button"
                                data-loading-text="Adding to cart..."
                                aria-busy="false"
                                aria-haspopup="dialog"
                                className="w-commerce-commerceaddtocartbutton add-to-cart-button"
                              >
                                Add to Cart
                              </Button>
                            </Form>
                            <div
                              style={{ display: "none" }}
                              className="w-commerce-commerceaddtocartoutofstock out-of-stock"
                              tabIndex={0}
                            >
                              <div>This product is out of stock :(</div>
                            </div>
                            <div
                              aria-live="assertive"
                              data-node-type="commerce-add-to-cart-error"
                              style={{ display: "none" }}
                              className="w-commerce-commerceaddtocarterror error-message"
                            >
                              <div
                                data-node-type="commerce-add-to-cart-error"
                                data-w-add-to-cart-quantity-error="Product is not available in this quantity."
                                data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
                                data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription."
                                data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item."
                                data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
                                data-w-add-to-cart-select-all-options-error="Please select an option in each set."
                              >
                                Product is not available in this quantity.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Collapse
                          defaultActiveKey={["1"]}
                          ghost
                          items={items}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DefaultLayout>
      </Suspense>
    </>
  );
}
