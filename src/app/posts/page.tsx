"use client";
import SideNavigation from "@components/blog/side-post-nav.component";
import NewsletterForm from "@components/blog/side-post-nav.component";
import PostItem from "@components/blog/post-item.component";
import SpinnerList from "@components/shared/spinner-list";
import DefaultLayout from "@layouts/default-layout";
import { categoryAPI } from "@store/api/category_api";
import { postAPI } from "@store/api/post_api";
import { tagAPI } from "@store/api/tag_api";
import { userAPI } from "@store/api/user_api";
import { Col, Empty, Spin } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";
import { Suspense } from "react";

export default function IndexPage() {
  const {
    data: posts,
    error,
    isLoading,
    isFetching,
  } = postAPI.useFetchAllPostsQuery({
    searchTitle: "",
    sortBy: "date",
  });

  const {
    data: categories,
    isLoading: isLoadingCategory,
    isFetching: isFetchCategory,
  } = categoryAPI.useFetchAllCategoriesQuery(1);

  const {
    data: tags,
    isLoading: isLoadingTag,
    isFetching: isFetchTag,
  } = tagAPI.useFetchAllTagsQuery(1);

  const {
    data: users,
    isLoading: isLoadingUser,
    isFetching: isFetchUser,
  } = userAPI.useFetchAllUsersQuery(1);

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
      <DefaultLayout
        title={"Blog Posts - Informed Pet Parenting: Read Our Latest Veterinary Insights and Tips"}
        description={
          "Stay informed and connected with the latest trends, insights, and valuable tips in pet care. Our blog at Linkavet is a trusted resource for pet parents, filled with expert advice from our experienced veterinary team. Explore a variety of topics, from health and nutrition to behavior and training. Empower yourself with knowledge and become a proactive and knowledgeable pet owner. For the love of your furry friends, Linkavet is your go-to destination for insightful pet-related content"
        }
        keywords="veterinary, pet care, blog posts, LinkaVet, animal care"
        uri="posts"
      >
        <div
          style={{ opacity: 1, width: "100%", marginBottom: 30 }}
          className="content"
        >
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
                              href="#"
                              className="hero-heading-link"
                            >
                              Our Latest Vet Insights
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
                                Informed Pet Farming: Read Our Latest Veterinary
                                Insights and Tips
                              </p>
                            </div>
                          </div>
                          <div style={{ display: "block" }} className="hidden">
                            <div className="top-margin _20-pixels">
                              <div className="button-box">
                                <a
                                  href="/posts/we-launch-pet-doctor-webflow-template-this-week"
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
          {error && <h1>Something wrong...</h1>}
          <div className="content-section blog-page">
            <div className="content-wrapper w-container">
              <div className="flex">
                <div className="blog-left">
                  <h4 className="no-top-margin">Latest posts</h4>
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

                  {posts && posts.length ? (
                    <div className="top-margin">
                      <div className="w-dyn-list">
                        <div role="list" className="flex w-dyn-items">
                          {/* Your dynamic content items go here */}
                          {posts?.map((post) => (
                            <motion.div
                              className="box"
                              initial={{ opacity: 0, y: "-5%" }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              key={post.id}
                            >
                              <PostItem
                                users={
                                  isFetchUser || isLoadingUser ? [] : users
                                }
                                categories={
                                  isFetchCategory || isLoadingCategory
                                    ? []
                                    : categories
                                }
                                post={post}
                              />
                            </motion.div>
                          ))}
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
                  ) : (
                    <Col span={24}>
                      <div className="empty-wrap">
                        <Empty />
                      </div>
                    </Col>
                  )}
                </div>
                <SideNavigation />
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </Suspense>
  );
}
