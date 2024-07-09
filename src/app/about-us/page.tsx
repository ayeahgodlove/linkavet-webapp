"use client";
import AboutServiceItem from "@components/app-service/about-service-item.component";
import ExperienceCard from "@components/experience/experience-card.component";
import OfficesComponent from "@components/location/location.component";
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
        <div style={{ opacity: 1 }} className="content">
          <div id="Top" className="hero-section">
            <div className="hero-content-wrapper reverse w-container">
              <div className="hero-left center">
                <img
                  src="/images/dog-print.png"
                  loading="lazy"
                  width="241"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    opacity: 1,
                    transformStyle: "preserve-3d",
                  }}
                  alt=""
                  className="paw"
                />
                <img
                  src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64c0134284a173a1649028d1_About-girl.png"
                  loading="lazy"
                  style={{ opacity: 1 }}
                  width="435"
                  alt=""
                  srcSet="
              https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64c0134284a173a1649028d1_About-girl-p-500.png 500w,
              https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64c0134284a173a1649028d1_About-girl-p-800.png 800w,
              https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64c0134284a173a1649028d1_About-girl.png 908w
            "
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 60vw, (max-width: 991px) 47vw, 435px"
                  className="hero-dog"
                />
              </div>
              <div className="hero-right about-us">
                <div className="max-540-pixels">
                  <div>
                    <div
                      style={{
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        opacity: 1,
                        transformStyle: "preserve-3d",
                      }}
                      className="hero-fill-title"
                    >
                      About Us
                    </div>
                    <div style={{ display: "block" }} className="hidden">
                      <h1
                        className="hero-row-1 small"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                          opacity: 1,
                        }}
                      >
                        About
                      </h1>
                    </div>
                    <div style={{ display: "block" }} className="hidden">
                      <h1
                        className="hero-row-2 small"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                          opacity: 1,
                        }}
                      >
                        Pet Doctor
                      </h1>
                    </div>
                  </div>
                  <div className="hero-subtitle-box">
                    <div className="hero-text">
                      <div
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          opacity: 1,
                          transformStyle: "preserve-3d",
                        }}
                        className="hero-title"
                      >
                        We love pets like you do :)
                      </div>
                      <p
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          opacity: 1,
                          transformStyle: "preserve-3d",
                        }}
                        className="hero-subtitle"
                      >
                        Pets Webflow eCommerce Template is a modern and fresh
                        approach of an online store.
                      </p>
                    </div>
                    <div className="hero-button-box _40-pixels">
                      <a
                        href="#Intro"
                        data-w-id="062dc90b-9ad9-964a-eb59-49b8a7983b34"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          opacity: 1,
                          transformStyle: "preserve-3d",
                        }}
                        className="hero-button w-inline-block"
                      >
                        <div className="hero-button-flex">
                          <img
                            src="/images/64bff519b88ba50dd2196791_Pet-Owner-cat.png"
                            loading="lazy"
                            alt=""
                            width="51"
                            className="dog-button"
                          />
                          <div className="button-flex-height">
                            <div className="hero-button-text">
                              <div>Learn More</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="curve-bg no-margin"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
            >
              <div className="curve-text-container">
                <div className="hero-mini-pic"></div>
                <div className="curve-text-box">
                  <Link href="#" className="mini-title-link">
                    Call Us Today &nbsp;800-236-789
                  </Link>
                </div>
              </div>
              <div className="right-white-bg"></div>
            </div>
            <Link
              href="#Intro"
              data-w-id="582f8be5-b911-adca-f811-0e027d525e09"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                opacity: 1,
                transformStyle: "preserve-3d",
              }}
              className="scroll-down w-inline-block"
            >
              <img
                src="/images/64c02f4e5960ed4f4cede06d_Scroll_arrow.png"
                loading="lazy"
                alt=""
                width="16"
                className="scroll-arrow"
                style={{
                  transform:
                    "translate3d(0px, 6.7644px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              />
            </Link>
            <div
              style={{ width: "0%", display: "block", height: "744px" }}
              className="hero-bg"
            ></div>
          </div>
          <div id="Intro" className="content-section bottom-margin">
            <div className="intro-bottom-bg"></div>
            <div className="content-wrapper w-container">
              <div className="heading-box">
                <div>
                  <div className="title-regular">Intro</div>
                </div>
                <h2 className="h2">Get to know more</h2>
              </div>
              <div className="intro-flex">
                <div className="about-us-intro">
                  <a
                    href="#Philosophy"
                    data-w-id="d0bcd511-646a-f9c3-2018-82d7844201da"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="preview-link-block w-inline-block"
                  >
                    <img
                      src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf15de8e8b896cb3bd9d45_About-Intro-bg.jpg"
                      width="368"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 27vw, (max-width: 1279px) 28vw, 344.6640625px"
                      srcSet="
                  https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf15de8e8b896cb3bd9d45_About-Intro-bg-p-500.jpeg 500w,
                  https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf15de8e8b896cb3bd9d45_About-Intro-bg.jpg 736w
                "
                      alt=""
                    />
                    <div
                      className="hover-image about-into"
                      style={{
                        filter: "blur(0px)",
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    ></div>
                    <div
                      style={{ opacity: 0, display: "flex" }}
                      className="hover-overlay"
                    >
                      <div
                        style={{
                          display: "block",
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
                    <div
                      data-w-id="d0bcd511-646a-f9c3-2018-82d7844201e0"
                      style={{
                        display: "block",
                        width: "0%",
                        height: "230.238px",
                      }}
                      className="on-scroll-slide purpler"
                    ></div>
                  </a>
                  <div
                    data-w-id="43993187-f40b-f28f-abb1-bb2f681b13c1"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="left-padding"
                  >
                    <div className="top-margin _20-pixels">
                      <div className="top-margin">
                        <div>About Us</div>
                      </div>
                      <div className="top-margin">
                        <a href="#Philosophy" className="title-link-medium">
                          Pet Experts
                        </a>
                        <div className="top-margin _5-pixels">
                          <p>
                            Top spa resort in the US for 10 years visit us
                            today.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-intro">
                  <a
                    href="#Process"
                    data-w-id="85fc8bf4-27a6-52bc-84fc-3599580c935f"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="preview-link-block w-inline-block"
                  >
                    <img
                      src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf15de8e8b896cb3bd9d45_About-Intro-bg.jpg"
                      width="368"
                      sizes="(max-width: 479px) 100vw, (max-width: 1279px) 28vw, 344.6640625px"
                      srcSet="
                  https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf15de8e8b896cb3bd9d45_About-Intro-bg-p-500.jpeg 500w,
                  https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf15de8e8b896cb3bd9d45_About-Intro-bg.jpg 736w
                "
                      alt=""
                    />
                    <div className="hover-image about-into-2"></div>
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
                    <div
                      data-w-id="85fc8bf4-27a6-52bc-84fc-3599580c9365"
                      style={{
                        display: "block",
                        width: "0%",
                        height: "230.238px",
                      }}
                      className="on-scroll-slide purpler"
                    ></div>
                  </a>
                  <div
                    data-w-id="ca169cc8-ba26-0b86-b196-e1c9e2b5ee21"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="left-padding"
                  >
                    <div className="top-margin _20-pixels">
                      <div className="top-margin">
                        <div>Services</div>
                      </div>
                      <div className="top-margin">
                        <a href="#Process" className="title-link-medium">
                          Grooming Care
                        </a>
                        <div className="top-margin _5-pixels">
                          <p>
                            Top spa resort in the US for 10 years visit us
                            today.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-us-intro">
                  <a
                    href="#Numbers"
                    data-w-id="dce67c10-2ba9-e7bb-4d22-9f7552c61f6a"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="preview-link-block w-inline-block"
                  >
                    <img
                      src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf15de8e8b896cb3bd9d45_About-Intro-bg.jpg"
                      width="368"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 27vw, (max-width: 1279px) 28vw, 344.6640625px"
                      srcSet="
                  https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf15de8e8b896cb3bd9d45_About-Intro-bg-p-500.jpeg 500w,
                  https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf15de8e8b896cb3bd9d45_About-Intro-bg.jpg 736w
                "
                      alt=""
                    />
                    <div className="hover-image about-into-3"></div>
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
                    <div
                      data-w-id="dce67c10-2ba9-e7bb-4d22-9f7552c61f70"
                      style={{
                        display: "block",
                        width: "0%",
                        height: "230.238px",
                      }}
                      className="on-scroll-slide purpler"
                    ></div>
                  </a>
                  <div
                    data-w-id="a88fe23c-0b24-83b9-3dbc-ccab6a8c9293"
                    style={{
                      opacity: 1,
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                    className="left-padding"
                  >
                    <div className="top-margin _20-pixels">
                      <div className="top-margin">
                        <div>Contact Us</div>
                      </div>
                      <div className="top-margin">
                        <a href="#Numbers" className="title-link-medium">
                          Get in Touch
                        </a>
                        <div className="top-margin _5-pixels">
                          <p>
                            Top spa resort in the US for 10 years visit us
                            today.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="Philosophy"
            data-w-id="93373dd1-43be-eb5a-7277-90ea786d9235"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            className="content-section-blue"
          >
            <div className="left-white-bg"></div>
            <div className="content-wrapper w-container">
              <div className="flex">
                <div
                  data-w-id="93373dd1-43be-eb5a-7277-90ea786d9238"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="column-relative"
                >
                  <div className="relative">
                    <img
                      src="https://assets-global.website-files.com/5f0dd058e83fdf4ff06e83bf/5f0f1ad39ec309a8f390026f_Bg-1.jpg"
                      width="635.5"
                      alt=""
                    />
                    <div className="change-this-image _5"></div>
                    <div
                      data-w-id="93373dd1-43be-eb5a-7277-90ea786d923b"
                      style={{
                        display: "block",
                        width: "0%",
                        height: "391.962px",
                      }}
                      className="on-scroll-slide bluer"
                    ></div>
                  </div>
                </div>
                <div className="column-center padding-bottom">
                  <div className="max-442-pixels">
                    <div className="title-regular">Philosophy</div>
                    <div className="title-box">
                      <h3>We take pet care to a new level</h3>
                    </div>
                    <div className="subtile-box">
                      <p>
                        Feel refreshed, less stressed and more balanced with
                        over 50 spa treatments and services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="Features" className="content-section double">
            <div className="content-wrapper w-container">
              <div className="heading-box">
                <div>
                  <div className="title-regular">Features</div>
                </div>
                <h3 className="h3">Only the best features</h3>
              </div>
              <div className="flex center">
                <div
                  data-w-id="011900dd-ce54-5b16-56d0-c547562c6c51"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="feature-item"
                >
                  <div className="mini-feature-bg _1"></div>
                  <div>
                    <div className="title-semi-bold medium">Vet Doctors</div>
                    <div className="top-margin">
                      <div>
                        Taking a spa treatment is the most effective way.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="a01fb6da-8be4-b8d1-938c-f3f2a2c295c2"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="feature-item"
                >
                  <div className="mini-feature-bg _2"></div>
                  <div>
                    <div className="title-semi-bold medium">Dog Vaccines</div>
                    <div className="top-margin">
                      <div>
                        Taking a spa treatment is the most effective way.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="ded55400-e775-8dbd-542f-9f9e13fef245"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="feature-item _3"
                >
                  <div className="mini-feature-bg _3"></div>
                  <div>
                    <div className="title-semi-bold medium">Pet Store</div>
                    <div className="top-margin">
                      <div>
                        Taking a spa treatment is the most effective way.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="f10217d7-6416-e33d-d423-df7089eb3744"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="feature-item _4"
                >
                  <div className="mini-feature-bg _4"></div>
                  <div>
                    <div className="title-semi-bold medium">Best Quality</div>
                    <div className="top-margin">
                      <div>
                        Taking a spa treatment is the most effective way.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="2f499e9a-0094-d641-2d3e-3b5f32fcf601"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="feature-item _4"
                >
                  <div className="mini-feature-bg _5"></div>
                  <div>
                    <div className="title-semi-bold medium">
                      Pet Accessories
                    </div>
                    <div className="top-margin">
                      <div>
                        Taking a spa treatment is the most effective way.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="fa3212aa-9ed6-5be4-b3ef-82e297331d32"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  className="feature-item last"
                >
                  <div className="mini-feature-bg _6"></div>
                  <div>
                    <div className="title-semi-bold medium">Pet products</div>
                    <div className="top-margin">
                      <div>
                        Taking a spa treatment is the most effective way.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="Numbers" className="content-section">
            <div className="bottom-experience"></div>
            <div className="content-wrapper w-container">
              <div className="heading-box">
                <div>
                  <div className="title-regular">Stats</div>
                </div>
                <h4 className="h4 less-margin">Experience that matters</h4>
              </div>
              <div className="flex">
                <ExperienceCard
                  title="Years of Experience"
                  description="Don't risk your health with no experience doctors."
                  total={"40+"}
                  className=""
                />
                <ExperienceCard
                  title="Social Friends"
                  description="Thousands of happy customers support us."
                  total={"17.5k"}
                  className=""
                />
                <ExperienceCard
                  title="Full Guarantee"
                  description="We are here to exceed your expectations always."
                  total={"100%"}
                  className="last"
                />
              </div>
            </div>
          </div>
          <div className="content-section">
            <div className="content-wrapper w-container">
              <div className="heading-box">
                <div>
                  <div className="title-regular">Services</div>
                </div>
                <h4 className="h4 less-margin">Experience that matters</h4>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="flex w-dyn-items">
                  {/* Service Item 1 */}
                  <AboutServiceItem />
                  {/* Repeat similar structure for other service items */}
                  <AboutServiceItem />
                </div>
              </div>
            </div>
          </div>

          <OfficesComponent />
        </div>
      </DefaultLayout>
    </Suspense>
  );
}
