import Link from "next/link";

const ProductSection = () => {
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
              <a
                data-w-id="b808df7e-00da-bdc5-baef-8a6390d1004a"
                href="/product/dog-trash-bag"
                className="preview-block w-inline-block"
              >
                <img
                  src="/images/cute-cats.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 991px) 29vw, (max-width: 1279px) 30vw, 364.25px"
                  alt=""
                />
                <div className="discount-badge">-30%</div>
              </a>
              <div className="product-text-box">
                <a href="/product/dog-trash-bag" className="text-link">
                  Dog Trash Bag
                </a>
                <div className="paragraph-box _5-pixels">
                  <p>Pet Place Webflow eCommerce Template is a modern</p>
                </div>
                <div className="price-vertical-flex">
                  <a
                    data-wf-sku-bindings='[{"from":"f_price_","to":"innerHTML"}]'
                    href="/product/dog-trash-bag"
                    className="link-price"
                  >
                    $ 99.00 USD
                  </a>
                  <div
                    data-wf-sku-bindings='[{"from":"f_compare_at_price_7dr10dr","to":"innerHTML"}]'
                    className="compare-at-price"
                  >
                    $ 149.00 USD
                  </div>
                </div>
              </div>
            </div>

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
                href="/product/pet-accessories"
                className="preview-block w-inline-block"
              >
                <img
                  src="/images/dachshund-1519374.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 991px) 29vw, (max-width: 1279px) 30vw, 364.25px"
                  alt=""
                />
                <div className="discount-badge">-30%</div>
              </Link>
              <div className="product-text-box">
                <Link href="/product/pet-accessories" className="text-link">
                  Pet Accessories
                </Link>
                <div className="paragraph-box _5-pixels">
                  <p>Pet Place Webflow eCommerce Template is a modern</p>
                </div>
                <div className="price-vertical-flex">
                  <Link
                    data-wf-sku-bindings='[{"from":"f_price_","to":"innerHTML"}]'
                    href="/product/pet-accessories"
                    className="link-price"
                  >
                    $ 99.00 USD
                  </Link>
                  <div
                    data-wf-sku-bindings='[{"from":"f_compare_at_price_7dr10dr","to":"innerHTML"}]'
                    className="compare-at-price"
                  >
                    $ 149.00 USD
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat similar structure for other products */}
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
                href="/product/pet-accessories"
                className="preview-block w-inline-block"
              >
                <img
                  src="/images/dog-423398.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, (max-width: 991px) 29vw, (max-width: 1279px) 30vw, 364.25px"
                  alt=""
                />
                <div className="discount-badge">-30%</div>
              </Link>
              <div className="product-text-box">
                <Link href="/product/pet-accessories" className="text-link">
                  Pet Accessories
                </Link>
                <div className="paragraph-box _5-pixels">
                  <p>Pet Place Webflow eCommerce Template is a modern</p>
                </div>
                <div className="price-vertical-flex">
                  <Link
                    data-wf-sku-bindings='[{"from":"f_price_","to":"innerHTML"}]'
                    href="/product/pet-accessories"
                    className="link-price"
                  >
                    $ 99.00 USD
                  </Link>
                  <div
                    data-wf-sku-bindings='[{"from":"f_compare_at_price_7dr10dr","to":"innerHTML"}]'
                    className="compare-at-price"
                  >
                    $ 149.00 USD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
