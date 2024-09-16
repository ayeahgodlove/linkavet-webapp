"use client";
import useWindowSize from "@hook/shared/window-resize.hook";
import DefaultLayout from "@layouts/default-layout";
import { faqAPI } from "@store/api/faq_api";
import { Col, Collapse, CollapseProps, Empty, Spin, Typography } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";
import { Suspense } from "react";
import { FiPlus } from "react-icons/fi";

export default function IndexPage() {
  const {
    data: faqs,
    isLoading: isLoadingFaq,
    isFetching: isFetchFaq,
  } = faqAPI.useFetchAllFaqsQuery(1);

  const { width } = useWindowSize();
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
        title={"FAQs - Find answers to the questions"}
        description={
          "Find answers to the most common questions about our veterinary services at LinkaVet. From appointments to pet care, we have you covered."
        }
        keywords="veterinary, pet care, faqs, LinkaVet, animal care, vet questions"
        uri="faqs"
      >
        <div style={{ opacity: 1, width: "100%" }} className="content">
          <div id="Top" className="inner-hero-section">
            <div className="content-wrapper w-container">
              <div className="hero-inner-box">
                <div className="hero-inner-padding">
                  <div className="max-540-pixels">
                    <div>
                      <div>
                        <div style={{ display: "block" }} className="hidden">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              opacity: 1,
                              transformStyle: "preserve-3d",
                            }}
                            className="hero-fill-title"
                          >
                            Page
                          </div>
                        </div>
                        <div style={{ display: "block" }} className="hidden">
                          <h1
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              opacity: 1,
                              transformStyle: "preserve-3d",
                            }}
                            className="hero-inner-text"
                          >
                            Faq
                          </h1>
                        </div>
                      </div>
                      <div style={{ display: "block" }} className="hidden">
                        <p
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            opacity: 1,
                            transformStyle: "preserve-3d",
                          }}
                          className="hero-subtitle"
                        >
                          Frequently Asked Questions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ width: "0%", display: "block", height: "360px" }}
                className="hero-bg"
              ></div>
            </div>
          </div>

          <div id="Intro" className="content-section inner-pages">
            <div className="content-wrapper w-container">
              <div
                className="slider-container"
                style={{ padding: width > 767 ? "0 60px" : "0 24px" }}
              >
                <div
                  data-w-id="49999012-f8cf-36dc-633b-918b58d816fe"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="expand"
                >
                  {faqs && faqs.length ? (
                    <motion.div
                      className="box"
                      initial={{ opacity: 0, y: "-5%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Collapse
                        expandIcon={(props) => <FiPlus size={30} {...props} />}
                        expandIconPosition="end"
                        defaultActiveKey={["1"]}
                        ghost
                        bordered
                        size="large"
                        items={faqs.map((faq) => {
                          const item = {
                            key: faq.id,
                            label: (
                              <Typography.Title level={4}>
                                <span className="question-letter"> Q.</span>{" "}
                                <span className="question">{faq.question}</span>
                              </Typography.Title>
                            ),
                            children: (
                              <div style={{ display: "flex" }}>
                                {" "}
                                <span className="answer-letter">A. </span>{" "}
                                <p style={{ paddingLeft: 10 }}>{faq.answer}</p>
                              </div>
                            ),
                          };
                          return item;
                        })}
                      />
                    </motion.div>
                  ) : (
                    <Col span={24}>
                      <div className="empty-wrap">
                        <Empty />
                      </div>
                    </Col>
                  )}

                  <div className="faq-cta-box">
                    <div className="faq-cta-text">
                      Have more questions?{" "}
                      <Link href="/contact-us" className="faq-cta-link">
                        Get in touch with us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </Suspense>
  );
}
