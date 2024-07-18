"use client";
import BlogItemComponent from "@components/blog/blog-item.component";
import { API_URL_UPLOADS_POSTS } from "@constants/api-url";
import DefaultLayout from "@layouts/default-layout";
import { categoryAPI } from "@store/api/category_api";
import { postAPI } from "@store/api/post_api";
import { userAPI } from "@store/api/user_api";
import { Col, Empty, Spin } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";
import { Suspense } from "react";

export default function IndexPage({ params }: { params: { slug: string } }) {
  const {
    data: post,
    isLoading,
    isFetching,
  } = postAPI.useGetSinglePostBySlugQuery(params.slug);

  const { data: posts } = postAPI.useFetchAllPostsQuery({
    searchTitle: "",
  });

  const {
    data: categories,
    isLoading: isLoadingCategory,
    isFetching: isFetchCategory,
  } = categoryAPI.useFetchAllCategoriesQuery(1);

  const { data: users } = userAPI.useFetchAllUsersQuery(1);

  const {
    data: user,
    isLoading: isLoadingUser,
    isFetching: isFetchUser,
  } = userAPI.useGetSingleUserQuery(post ? post.authorId : "");


  const category = categories?.find((c) => c.id === post?.categoryId);

  if (isLoading || isFetching) {
    <Spin size="large" style={{ height: "65vh", width: "100%" }} />;
  }

  console.log("test: ", categories, users, post);

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
        {/* post image */}
        <div
          id="Top"
          style={{
            backgroundImage: `url("${API_URL_UPLOADS_POSTS}/${post?.imageUrl}")`,
          }}
          className="utility-hero"
        >
          <div
            className="hero-bg color"
            style={{
              width: "0%",
              display: "block",
              height: "840px",
            }}
          ></div>
        </div>

        <div id="Intro" className="content-section blog-page">
          <div className="content-wrapper w-container">
            <div className="inner-wrapper">
              <div
                data-w-id="2a4d9767-1683-cd37-1480-1d094fce4026"
                className="full-width-box"
              >
                <div>
                  <Link
                    style={{ backgroundColor: "#ffe3e2", color: "#b78988" }}
                    href={`/posts/category/${post?.categoryId}`}
                    className="category-link"
                  >
                    {category?.name}
                  </Link>
                </div>
                <div>
                  <h1>{post?.title}</h1>
                </div>

                <div
                  style={{
                    transform:
                      "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="divider-line"
                ></div>
              </div>
              <div className="w-richtext">
                <div
                  style={{ padding: 30, background: "#f2f2f2" }}
                  dangerouslySetInnerHTML={{
                    __html: post?.content as any,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div id="Intro" className="content-section inner-pages">
          <div className="content-wrapper w-container">
            <div
              data-w-id="1d633682-fa94-a46a-cc7b-a29116e9d4fd"
              className="heading-full"
            >
              <h4 className="h4">Latest posts</h4>
              <div
                style={{
                  transform:
                    "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                className="divider-line"
              ></div>
            </div>
            <div className="w-dyn-list">
              {posts && posts.length ? (
                <div role="list" className="flex w-dyn-items">
                  {posts?.map((post) => (
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, y: "-5%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      key={post.id}
                    >
                      <BlogItemComponent
                        users={isFetchUser || isLoadingUser ? [] : users}
                        categories={
                          isFetchCategory || isLoadingCategory ? [] : categories
                        }
                        post={post}
                      />
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
            <div className="button-box _20-pixels">
              <a href="/posts" className="button-outline-small blue w-button">
                Back to Blog
              </a>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </Suspense>
  );
}
