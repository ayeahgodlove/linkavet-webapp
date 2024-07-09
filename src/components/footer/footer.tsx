"use client";
import React, { useState } from "react";
import { Button, ConfigProvider, Input, message } from "antd";
import styles from "./footer.module.css";
import Link from "next/link";
import { THEME } from "@constants/constant";
import { ArrowRightOutlined } from "@ant-design/icons";

type Props = {
  logoPath: string;
};
export const AppFooter: React.FC<Props> = ({ logoPath }) => {
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(false);

  const handleSubscribe = async () => {
    setLoad(true);
    console.log("email: ", email);
    const feedback = true;

    if (feedback) {
      message.success("You have subscribe successfully!");
      setEmail("");
    } else {
      message.error("subscribe failed!");
    }
    setLoad(false);
  };
  return (
    <footer className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.content_group_logo}>
            <img
              src={`${logoPath}`}
              className={styles.logo}
              height={90}
              width={140}
              alt="Cumi logo"
            />
            <p className={styles.subheading}>Empowering Your Digital Journey</p>
          </div>
          <div className={styles.content_group}>
            <h4>Discover</h4>
            <Link href="/our_services">Services</Link>
            <Link href="/products">Products</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/about_us">About</Link>
          </div>
          <div className={styles.content_group}>
            <h4>Info</h4>
            <Link href="/posts">Blog Posts</Link>
            <Link href="/contact_us">Contact us</Link>
            <Link href="/faqs">FAQs</Link>
          </div>
          <div className={styles.content_group_waitlist}>
            <h4>Join Our Mailing List</h4>
            <p className={styles.subheading}>
              Get notified and updated with our marketing emails.
            </p>
            <form>
              <ConfigProvider theme={THEME}>
                <Input
                  placeholder="Your Email"
                  size="large"
                  addonAfter={
                    <Button
                      type="link"
                      icon={
                        <ArrowRightOutlined
                          style={{ color: "#81ce89" }}
                          onClick={handleSubscribe}
                        />
                      }
                    />
                  }
                  disabled={load}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </ConfigProvider>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
