"use client";
import Products from "@components/products/products";
import { makeUpLabel } from "../../../../utils";
import DefaultLayout from "@layouts/default-layout";
import PageContent from "@components/page-content/page-content";
import { categoryAPI } from "@store/api/category_api";
import { useEffect } from "react";
import { emptyCategory } from "@model/category.model";
import { Col, Empty } from "antd";
import ProductItem from "@components/products/product-item.component";
import { motion } from "framer-motion";
import SpinnerList from "@components/shared/spinner-list";
import { productAPI } from "@store/api/product_api";

export default function IndexPage({ params }: { params: { id: string } }) {
  const key = params.id;

  const {
    data: categoryData,
    isLoading: categoryIsLoading,
    isFetching: categoryIsFetching,
  } = categoryAPI.useGetSingleCategoryQuery(key);

  const {
    data: products,
    error,
    isLoading,
    isFetching,
  } = productAPI.useFetchAllProductsByCategoryQuery(key);

  useEffect(() => {}, [products, isLoading, isFetching]);
  console.log("error: ", error);
  return (
    <DefaultLayout
      title={"Vet Products - Your Pet's Wellbeing, Our Priority"}
      description={
        "Elevate your farm and pet's lifestyle with our premium range of nutrition, grooming essentials, toys, and wellness products. Each item is selected with your pet's health and happiness in mind. Shop confidently for top-quality products that complement our commitment to excellence in veterinary care. Enhance your pet's life today with Linkavet."
      }
      keywords="veterinary, pet care, store, products, LinkaVet, animal care"
      uri="products"
    >
      <div id="Intro" className="content-section store">
        <div className="content-wrapper">
          <div
            data-w-id="05bef794-16c2-6b98-b1ea-df029fb1ead8"
            className="heading-full"
          >
            <h4 className="h4">
              Products by Category
              {/* Category{" "}
              {makeUpLabel(
                categoryIsLoading || categoryIsFetching
                  ? emptyCategory
                  : categoryData
              )} */}
            </h4>
            <div
              style={{
                transform:
                  "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="divider-line"
            ></div>
          </div>

          <PageContent hasSider>
            {error && <h1>Something wrong...</h1>}
            {(isLoading || isFetching) && (
              <motion.div
                className="box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <SpinnerList />
              </motion.div>
            )}
            {products && products.length ? (
              <div
                role="list"
                className="flex w-dyn-items"
                style={{ width: "100%" }}
              >
                {/* Product Item 1 */}
                {products?.map((product) => (
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, y: "-5%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    key={product.id}
                  >
                    <ProductItem product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <Col span={24}>
                <div className="empty-wrap">
                  <Empty />
                </div>
              </Col>
            )}
          </PageContent>
        </div>
      </div>
      {/*
        <div>
          <Products category={key} />
        </div> */}
    </DefaultLayout>
  );
}
