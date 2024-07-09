import React from "react";

const PostItem = () => {
  return (
    <div role="listitem" className="post-preview-full w-dyn-item">
      <div className="left-blog-posst">
        <a
          href="/post/paw-some-nutrition-fueling-your-pets-health"
          className="preview-link-block full-height w-inline-block"
        >
          <img
            src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bd6895491c490b412ad614_Post-bg.jpg"
            loading="lazy"
            width="560"
            sizes="(max-width: 479px) 44vw, (max-width: 991px) 29vw, (max-width: 1279px) 33vw, 408.78125px"
            alt=""
            srcSet="
              https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bd6895491c490b412ad614_Post-bg-p-500.jpg  500w,
              https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bd6895491c490b412ad614_Post-bg-p-800.jpg  800w,
              https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bd6895491c490b412ad614_Post-bg.jpg       1073w
            "
          />
          <div
            style={{
              backgroundImage:
                "url('https://assets-global.website-files.com/64bc53263f9cb6f9722de0cd/64bd67e21b90be3b5f841263_cerca-mujer-abrazando-su-perro-mascota%20(3).jpg')",
            }}
            className="hover-image"
          ></div>
          <div
            style={{ opacity: 0, display: "flex" }}
            className="hover-overlay"
          >
            <div
              style={{
                display: "none",
                transform:
                  "translate3d(0px, 13px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                opacity: 0,
                transformStyle: "preserve-3d",
              }}
              className="button-outline white"
            >
              Read more
            </div>
          </div>
        </a>
      </div>
      <div className="preview-text-container">
        <div>
          <a
            style={{ backgroundColor: "#e7ffea", color: "#6fb678" }}
            href="/post-category/ask-pet-doctor"
            className="category-link"
          >
            Ask Pet Doctor
          </a>
        </div>
        <div className="preview-link-box">
          <a
            href="/post/paw-some-nutrition-fueling-your-pets-health"
            className="preview-link"
          >
            Paw-some Nutrition: Fueling Your Pet's Health
          </a>
        </div>
        <div className="preview-link-box">
          <p className="paragraph-medium">
            Pet Place is a Webflow Non Code Template for Business like you
          </p>
        </div>
        <div className="link-block-box">
          <div className="mintures-to-read">3 min</div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
