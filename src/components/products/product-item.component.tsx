import React from 'react';

const ProductItem = () => {
  return (
    <div role="listitem" className="product-item grid w-dyn-item">
      <a
        data-w-id="0cfd1b8c-5f47-1e6e-9b2a-cc1b107709e7"
        href="/product/dog-trash-bag"
        className="preview-block w-inline-block"
      >
        <img
          src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bc74d58af96339082818d7_Work-Bg-2.jpg"
          loading="lazy"
          srcSet="
            https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bc74d58af96339082818d7_Work-Bg-2-p-500.jpg 500w,
            https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bc74d58af96339082818d7_Work-Bg-2-p-800.jpg 800w,
            https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bc74d58af96339082818d7_Work-Bg-2.jpg       984w
          "
          sizes="(max-width: 479px) 100vw, (max-width: 1279px) 28vw, 352.5px"
          alt=""
        />
        <div
          style={{
            backgroundImage:
              "url('https://assets-global.website-files.com/64bc53263f9cb6f9722de0cd/64bf0eda66716a49a270305d_arreglo-bolsa-caca-mascotas.jpg')",
          }}
          className="hover-image w-condition-invisible"
          data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr.url%22%2C%22to%22%3A%22style.backgroundImage%22%7D%5D"
        >
          <div className="item-hover-overlay" style={{ display: 'none', opacity: 0 }}></div>
          <div className="blur-hover-overlay" style={{ opacity: 0 }}></div>
          <div
            className="button-hover"
            style={{
              transform:
                'translate3d(0%, 0%, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: 0,
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            View Product
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url('https://assets-global.website-files.com/64bc53263f9cb6f9722de0cd/64beecf2e8bd5cee59122b18_Box-Thumbnail.jpg')",
          }}
          className="hover-image"
        >
          <div className="item-hover-overlay" style={{ display: 'none', opacity: 0 }}></div>
          <div className="blur-hover-overlay" style={{ opacity: 0 }}></div>
          <div
            className="button-hover"
            style={{
              transform:
                'translate3d(0%, 0%, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              opacity: 0,
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            View Product
          </div>
        </div>
        <div className="discount-badge">-30%</div>
      </a>
      <div className="product-text-box">
        <div>
          <div className="product-category-margin w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <a href="/category/accessories" className="fill-title-link">
                  Accessories
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="/product/dog-trash-bag" className="text-link">
          Dog Trash Bag
        </a>
        <div className="paragraph-box _5-pixels">
          <p>Pet Place Webflow eCommerce Template is a modern</p>
        </div>
        <div className="price-vertical-flex">
          <a
            href="/product/dog-trash-bag"
            className="link-price"
            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
          >
            $&nbsp;99.00&nbsp;USD
          </a>
          <div
            className="compare-at-price"
            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_compare_at_price_7dr10dr%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
          >
            $&nbsp;149.00&nbsp;USD
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
