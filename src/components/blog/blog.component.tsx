import { categoryAPI } from "@store/api/category_api";
import { postAPI } from "@store/api/post_api";
import { tagAPI } from "@store/api/tag_api";
import { userAPI } from "@store/api/user_api";
import { Col, Empty } from "antd";
import { motion } from "framer-motion";
import React from "react";
import BlogItemComponent from "./blog-item.component";

const BlogSection = () => {
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
    <div className="content-section" style={{ paddingBottom: "7rem" }}>
      <div className="content-wrapper w-container">
        <div className="heading-box">
          <div>
            <div className="title-regular">Blog</div>
          </div>
          <h3 className="no-top-margin">Latest news &amp; updates</h3>
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
      </div>
    </div>
  );
};

export default BlogSection;
