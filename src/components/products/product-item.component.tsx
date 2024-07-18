import { API_URL_UPLOADS_PRODUCTS } from "@constants/api-url";
import { IProduct } from "@model/product.model";
import { categoryAPI } from "@store/api/category_api";
import { format } from "@utils/format";
import Link from "next/link";
import React from "react";

interface Prop {
  product: IProduct;
}
const ProductItem: React.FC<Prop> = ({ product }) => {
  const {
    data: categories,
    isLoading: isLoadingCategory,
    isFetching: isFetchCategory,
  } = categoryAPI.useFetchAllCategoriesQuery(1);

  const categoryName =
    categories && categories.length > 0
      ? categories.find((c) => c.id === product.categoryId)?.name
      : "";

  return (
    <div role="listitem" className="product-item grid w-dyn-item">
      <Link
        data-w-id="0cfd1b8c-5f47-1e6e-9b2a-cc1b107709e7"
        href={`/store/${product.id}`}
        className="preview-block w-inline-block"
      >
        <img
          src={`${API_URL_UPLOADS_PRODUCTS}/${product.productImages[0]}`}
          loading="lazy"
          sizes="(max-width: 479px) 100vw, (max-width: 1279px) 28vw, 352.5px"
          alt={product.name}
        />
        <div
          style={{
            backgroundImage: `url('${API_URL_UPLOADS_PRODUCTS}/${product.productImages[0]}')`,
          }}
          className="hover-image w-condition-invisible"
          data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.backgroundImage%22%7D%5D"
        >
          <div
            className="item-hover-overlay"
            style={{ display: "none", opacity: 0 }}
          ></div>
          <div className="blur-hover-overlay" style={{ opacity: 0 }}></div>
          <div
            className="button-hover"
            style={{
              transform:
                "translate3d(0%, 0%, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              opacity: 0,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            View Product
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url('${API_URL_UPLOADS_PRODUCTS}/${product.productImages[0]}')`,
          }}
          className="hover-image"
        >
          <div
            className="item-hover-overlay"
            style={{ display: "none", opacity: 0 }}
          ></div>
          <div className="blur-hover-overlay" style={{ opacity: 0 }}></div>
          <div
            className="button-hover"
            style={{
              transform:
                "translate3d(0%, 0%, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              opacity: 0,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            View Product
          </div>
        </div>
        <div className="discount-badge">{product.discountPercentage}%</div>
      </Link>
      <div className="product-text-box">
        <div style={{ marginTop: 7}}>
          <div className="product-category-margin w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <Link
                  href={`/store/category/${product.categoryId}`}
                  className="fill-title-link"
                >
                  {categoryName}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link href={`/store/${product.id}`} className="text-link">
          {product.name}
        </Link>
        <div className="paragraph-box _5-pixels">
          <p>{product.shortDescription}</p>
        </div>
        <div className="price-vertical-flex">
          <Link
            href={`/store/${product.id}`}
            className="link-price"
            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
          >
            {parseFloat(
              (
                (product.amount * (100 - product.discountPercentage)) /
                100
              ).toString()
            ).toFixed(0)}
          </Link>
          <div
            className="compare-at-price"
            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
          >
            {format.number(product.amount) + " XAF"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
