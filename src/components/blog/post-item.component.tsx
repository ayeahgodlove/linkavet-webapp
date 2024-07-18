import { API_URL_UPLOADS_POSTS } from "@constants/api-url";
import { ICategory } from "@model/category.model";
import { IPost } from "@model/post";
import { IUser } from "@model/user.model";
import { Space, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiCalendarDate, CiFolderOn } from "react-icons/ci";
import { format } from "@utils/format";
interface IProp {
  post: IPost;
  categories: ICategory[] | undefined;
  users: IUser[] | undefined;
}
const PostItem: React.FC<IProp> = ({ post, categories, users }) => {
  const categoryDescription = categories?.find((c) => c.id === post.categoryId);
  const userDescription = users?.find((c) => c.id === post.authorId);

  return (
    <div role="listitem" className="post-preview-full w-dyn-item">
      <div className="left-blog-posst">
        <Link
          href={`/posts/${post.slug}`}
          className="preview-link-block full-height w-inline-block"
        >
          <img
            src={`${API_URL_UPLOADS_POSTS}/${post.imageUrl}`}
            loading="lazy"
            width="560"
            sizes="(max-width: 479px) 44vw, (max-width: 991px) 29vw, (max-width: 1279px) 33vw, 408.78125px"
            alt={post.title}
          />
          <div
            style={{
              backgroundImage:
                `url("${API_URL_UPLOADS_POSTS}/${post.imageUrl}")`,
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
        </Link>
      </div>
      <div className="preview-text-container">
        <div>
          <Link
            style={{ backgroundColor: "#e7ffea", color: "#6fb678" }}
            href={`/posts/category/${post.categoryId}`}
            className="category-link"
          >
             <CiFolderOn /> {categoryDescription?.name}
          </Link>
        </div>
        <div className="preview-link-box">
          <Link href={`/posts/${post.slug}`} className="preview-link">
            {post.title}
          </Link>
        </div>
        <div className="preview-link-box">
          <p className="paragraph-medium">{post.summary.slice(0, 100) + "..."}</p>
        </div>
        <div className="link-block-box">
          <div className="mintures-to-read">{post.readTime}</div>
        </div>

        <Space style={{ marginBottom: 5, flexWrap: "wrap" }}>
          <Typography.Link className="text-secondary">
            <FaRegCircleUser /> {userDescription?.username}
          </Typography.Link>
          <Typography.Text className="text-secondary">
            <CiCalendarDate /> {format.date(post?.publishedAt)}
          </Typography.Text>
        </Space>
      </div>
    </div>
  );
};

export default PostItem;
