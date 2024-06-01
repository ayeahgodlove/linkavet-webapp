"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Image, List, Rate, Tabs, message } from "antd";
import Meta from "antd/es/card/Meta";

import { Typography, Badge } from "antd";
import { addCartItem, hashidsEncode } from "../../utils";
import {
  DownOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  UpOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { productAPI } from "@store/api/product_api";
import { IProduct } from "@model/product.model";
import { API_URL_UPLOADS_PRODUCTS } from "@constants/api-url";

const AddToCardButton = ({ item }: { item: any }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [cartItems, setCartItems] = useState<any[]>([]);

  const onClick = () => {
    setIsLoading(true);
    message.success(`${item.title} has been added to cart 👌`);
    let newCartItems = addCartItem(cartItems, item);
    setCartItems(newCartItems);
    console.log(
      "🚀 ~ file: index.js:24 ~ CartHolder ~ cartItems:",
      newCartItems
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <Button type="link" onClick={onClick} loading={isLoading}>
      Add to card
    </Button>
  );
};

const ListProducts = ({ products }: { products: any[] }) => {
  const [productsData, setproductsData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setproductsData(products);
      setLoading(false);
      setCurrentPage(1);
    }, 1000);
  }, [products]);

  return (
    <List
      grid={{
        column: 3,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 4,
      }}
      pagination={{
        hideOnSinglePage: true,
        position: "bottom",
        align: "center",
        defaultPageSize: 12,
        current: currentPage,
        onChange: (page, pageSize) => {
          if (page !== currentPage) setCurrentPage(page);
        },
      }}
      loading={loading}
      dataSource={productsData}
      renderItem={(product, index) => (
        <div className="itemCard">
          <Badge.Ribbon
            text={`${parseFloat(
              product.discountPercentage.toString()
            ).toFixed()}% OFF`}
            color="volcano"
            placement="start"
          >
            <Card
              hoverable
              cover={
                <Image
                  alt={product.name}
                  className="itemCardImage"
                  src={`${API_URL_UPLOADS_PRODUCTS}/${product.images[0].url}`}
                  style={{ width: "100%", objectFit: "cover", aspectRatio: 9 }}
                />
              }
              actions={[
                <div className="itemRating">
                  <Rate value={product.rating} allowHalf disabled />
                </div>,
                <div>
                  <AddToCardButton item={product} />
                </div>,
              ]}
            >
              <Meta
                title={
                  <>
                    <Typography.Paragraph>
                      <Typography.Title level={4} style={{ margin: 0 }}>
                        <Link href={`/products/${product.id}`}>
                          {product.name}
                        </Link>
                      </Typography.Title>
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                      Price: $
                      {parseFloat(
                        (
                          (product.price * (100 - product.discountPercentage)) /
                          100
                        ).toString()
                      ).toFixed(0)}
                      <Typography.Text delete type="danger">
                        {" "}
                        ${product.price}
                      </Typography.Text>
                    </Typography.Paragraph>
                  </>
                }
                description={
                  <Typography.Paragraph
                    ellipsis={{ rows: 2, expandable: false }}
                  >
                    {product.description}
                  </Typography.Paragraph>
                }
              />
            </Card>
          </Badge.Ribbon>
        </div>
      )}
    />
  );
};

interface ProductProps {
  category: any;
  query?: string;
}
const Products: React.FC<ProductProps> = ({ category, query }) => {
  const { data: productsByKeyWord } =
    productAPI.useFetchAllProductsByKeyWordQuery(query || "");
  const { data: productsByCategory } =
    productAPI.useFetchAllProductsByCategoryQuery(category || "");
  const { data: allProducts } = productAPI.useFetchAllProductsQuery();

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (query) {
      setProducts(productsByKeyWord || []);
    } else if (category) {
      setProducts(productsByCategory || []);
    } else {
      setProducts(allProducts || []);
    }
  }, [query, category, productsByKeyWord, productsByCategory, allProducts]);

  const sortProductsBy = (sortedBy: any) => {
    const sortedArr = [...products].sort((a, b) => {
      if (sortedBy === "az")
        return a.name > b.name ? 1 : a.name === b.name ? 0 : -1;
      else if (sortedBy === "za")
        return a.name > b.name ? -1 : a.name === b.name ? 0 : 1;
      else if (sortedBy === "lh")
        return a.price > b.price ? 1 : a.price === b.price ? 0 : -1;
      else if (sortedBy === "hl")
        return a.price > b.price ? -1 : a.price === b.price ? 0 : 1;
      else return a.name > b.name ? 1 : a.name === b.name ? 0 : -1;
    });
    setProducts(sortedArr);
  };

  const onChange = (key: string) => {
    console.log(key);
    sortProductsBy(key);
  };

  const sortBy = [
    {
      key: "az",
      label: (
        <>
          AZ <SortAscendingOutlined />
        </>
      ),
    },
    {
      key: "za",
      label: (
        <>
          ZA <SortDescendingOutlined />
        </>
      ),
    },
    {
      key: "lh",
      label: (
        <>
          Price <UpOutlined />
        </>
      ),
    },
    {
      key: "hl",
      label: (
        <>
          Price <DownOutlined />
        </>
      ),
    },
  ];

  return (
    <>
      {!!products && !!products.length ? (
        <>
          <Tabs
            tabPosition="top"
            items={sortBy}
            onChange={onChange}
            style={{ width: "100%", maxWidth: "80vw" }}
          />
          <ListProducts products={products} />
        </>
      ) : (
        <ListProducts products={products} />
      )}
    </>
  );
};

export default Products;
