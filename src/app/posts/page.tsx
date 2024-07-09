"use client";
import NewsletterForm from "@components/blog/newsletter.component";
import PostItem from "@components/blog/post-item.component";
import OfficesComponent from "@components/location/location.component";
import PageContent from "@components/page-content/page-content";
import ProductItem from "@components/products/product-item.component";
import DefaultLayout from "@layouts/default-layout";
import { Spin } from "antd";
import Link from "next/link";
import { Suspense } from "react";

export default function IndexPage() {
  return (
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
      <DefaultLayout>
        <div style={{ opacity: 1, width: "100%", marginBottom: 30 }} className="content">
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div
                  id="Top"
                  style={{
                    backgroundImage: `url('/images/64bd680679e0f267ccdcfc79_joven-familia-feliz-perro-usando-telefono-inteligente-mientras-toma-selfie-casa-foco-chica.jpg')`,
                  }}
                  className="hero-preview-post"
                >
                  <div className="overlay"></div>
                  <div className="content-wrapper w-container">
                    <div className="flex full">
                      <div className="hero-blog">
                        <div>
                          <div className="on-load">
                            <a
                              style={{
                                backgroundColor: "rgb(255, 227, 226)",
                                color: "rgb(183, 137, 136)",
                                transform:
                                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                opacity: 1,
                                transformStyle: "preserve-3d",
                              }}
                              href="/post-category/updates"
                              className="category-link hero"
                            >
                              Updates
                            </a>
                          </div>
                          <div style={{ display: "block" }} className="hidden">
                            <Link
                              style={{
                                transform:
                                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                opacity: 1,
                                transformStyle: "preserve-3d",
                              }}
                              href="/post/we-launch-pet-doctor-webflow-template-this-week"
                              className="hero-heading-link"
                            >
                              We Launch Pet Doctor Webflow Template this Week!
                            </Link>
                          </div>
                          <div style={{ display: "block" }} className="hidden">
                            <div className="top-margin">
                              <p
                                className="hero-subtitle white"
                                style={{
                                  transform:
                                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d",
                                  opacity: 1,
                                }}
                              >
                                Pet Place is a Webflow Non Code Template for
                                Business like you
                              </p>
                            </div>
                          </div>
                          <div style={{ display: "block" }} className="hidden">
                            <div className="top-margin _20-pixels">
                              <div className="button-box">
                                <a
                                  href="/post/we-launch-pet-doctor-webflow-template-this-week"
                                  style={{
                                    transform:
                                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                    opacity: 1,
                                    transformStyle: "preserve-3d",
                                  }}
                                  className="button-outline-small white w-button"
                                >
                                  Read More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero-bottom">
                    <div className="hero-bottom-left"></div>
                    <div className="hero-bottom-right"></div>
                  </div>
                  <div
                    className="hero-bg color"
                    style={{ width: "0%", display: "block", height: "723px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-section blog-page">
            <div className="content-wrapper w-container">
              <div className="flex">
                <div className="blog-left">
                  <h4 className="no-top-margin">Latest posts</h4>
                  <div className="top-margin">
                    <div className="w-dyn-list">
                      <div role="list" className="flex w-dyn-items">
                        {/* Your dynamic content items go here */}
                        <PostItem />
                        <PostItem />
                        <PostItem />
                        <PostItem />
                      </div>
                      <div
                        role="navigation"
                        aria-label="List"
                        className="w-pagination-wrapper pagination"
                      >
                        <a
                          href="?d9123e5e_page=2"
                          aria-label="Next Page"
                          className="w-pagination-next button-outline-small"
                        >
                          <div className="w-inline-block">Next</div>
                          <svg
                            className="w-pagination-next-icon"
                            height="12px"
                            width="12px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 12 12"
                            transform="translate(0, 1)"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              fillRule="evenodd"
                              d="M4 2l4 4-4 4"
                            ></path>
                          </svg>
                        </a>
                        {/* Replace <link> with React's <link> is not valid inside JSX */}
                        <link rel="prerender" href="?d9123e5e_page=2" />
                      </div>
                    </div>
                  </div>
                </div>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </Suspense>
  );
}
