"use client";
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
              <div className="flex">
                <div
                  data-w-id="49999012-f8cf-36dc-633b-918b58d816f1"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="faq-left"
                >
                  <div className="position-sticky">
                    <h5>Faq</h5>
                    <div>
                      <a href="#About-Us" className="text-block-link">
                        About Us
                      </a>
                      <div className="top-margin">
                        <a href="#Treatments" className="text-block-link">
                          Treatments
                        </a>
                      </div>
                      <div className="top-margin">
                        <a href="#Other" className="text-block-link">
                          Other
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <div id="About-Us">
                    <h3 className="no-top-margin">About Us</h3>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d81703"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                Where are you located?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d81718"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                What kind of treatments do you offer?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d8172d"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                Are you certified pet experts?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="Treatments" className="faq-set">
                    <h3>Treatments</h3>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d81745"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                What treatments do you offer?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d8175a"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                How long is each treatment?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d8176f"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                How many treatments does my pet need?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="Other" className="faq-set">
                    <h3>Other</h3>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d8178e"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                Do you accept walk-ins?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d817a3"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                Do you offer gift cards?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d817b8"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                Do you offer payment plans?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d817cd"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                Do you offer refunds?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d817e2"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                Do you offer home visits?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d817f7"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                Do you offer weekend appointments?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d8180c"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                Do you offer student discounts?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d81821"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                Do you treat exotic pets?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-wrapper">
                      <a
                        href="#"
                        data-w-id="49999012-f8cf-36dc-633b-918b58d81836"
                        className="accordion-item-trigger w-inline-block"
                      >
                        <div className="full-width">
                          <div className="flex-no-wrap">
                            <div className="faq-letter-box">
                              <div className="question-letter">Q.</div>
                            </div>
                            <div className="expand">
                              <div className="question">
                                How can I schedule an appointment?
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-close-box">
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                            className="vertical"
                          ></div>
                          <div
                            style={{ opacity: 1 }}
                            className="horizontal"
                          ></div>
                        </div>
                      </a>
                      <div
                        style={{ width: "100%", height: "0px" }}
                        className="accordion-item-content"
                      >
                        <div className="faq-letter-box">
                          <div className="answer-letter">A.</div>
                        </div>
                        <div className="expand">
                          <p>
                            Nam libero tempore, cum soluta nobis est eligendi
                            optio cumque nihil impedit quo minus id quod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
