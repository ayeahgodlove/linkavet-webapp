import SpinnerList from "@components/shared/spinner-list";
import { API_URL_UPLOADS_PRODUCTS } from "@constants/api-url";
import { productAPI } from "@store/api/product_api";
import { format } from "@utils/format";
import { Col, Empty } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";

const ProductSection = () => {
  const {
    data: products,
    error,
    isLoading,
    isFetching,
  } = productAPI.useFetchAllProductsQuery(1);

  return (
    <div
      data-w-id="b808df7e-00da-bdc5-baef-8a6390d1003e"
      style={{
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
      className="content-section pricing"
    >
      <div className="products-bottom-bg"></div>
      <div className="content-wrapper w-container">
        <div className="heading-box">
          <div>
            <div id="Products" className="title-regular">
              Products
            </div>
          </div>
          <h3 className="no-top-margin">Featured Veterinary products</h3>
        </div>
        <div className="w-dyn-list">
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
                  <div role="list" className="flex center w-dyn-items">
                    <div
                      data-w-id="b808df7e-00da-bdc5-baef-8a6390d10049"
                      style={{
                        opacity: 1,
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                      role="listitem"
                      className="product-item w-dyn-item"
                    >
                      <Link
                        data-w-id="b808df7e-00da-bdc5-baef-8a6390d1004a"
                        href={`/store/${product.id}`}
                        className="preview-block w-inline-block"
                      >
                        <img
                          src={`${API_URL_UPLOADS_PRODUCTS}/${product.productImages[0]}`}
                          loading="lazy"
                          sizes="(max-width: 479px) 100vw, (max-width: 991px) 29vw, (max-width: 1279px) 30vw, 364.25px"
                          alt={product.name}
                        />
                        <div className="discount-badge">
                          -{product.discountPercentage}%
                        </div>
                      </Link>
                      <div className="product-text-box">
                        <Link
                          href={`/store/${product.id}`}
                          className="text-link"
                        >
                          {product.name}
                        </Link>
                        <div className="paragraph-box _5-pixels">
                          <p>{product.shortDescription}</p>
                        </div>
                        <div className="price-vertical-flex">
                          <Link
                            data-wf-sku-bindings='[{"from":"f_price_","to":"innerHTML"}]'
                            href={`/store/${product.id}`}
                            className="link-price"
                          >
                            {parseFloat(
                              (
                                (product.amount *
                                  (100 - product.discountPercentage)) /
                                100
                              ).toString()
                            ).toFixed(0)}
                          </Link>
                          <div
                            data-wf-sku-bindings='[{"from":"f_compare_at_price_7dr10dr","to":"innerHTML"}]'
                            className="compare-at-price"
                          >
                            {format.number(product.amount) + " XAF"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
