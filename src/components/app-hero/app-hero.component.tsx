"use client";
import React from "react";
import Link from "next/link";

const AppHero = () => {
  return (
    <>
      <div id="hero" className="hero-section">
        <div className="hero-bottom-bg"></div>
        <div className="hero-content-wrapper reverse w-container">
          <div className="hero-left">
            <img
              src="/images/dog-print.png"
              loading="lazy"
              width="241"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
                opacity: 1,
                transformStyle: "preserve-3d",
              }}
              alt=""
              className="paw"
            />
            <img
              src="/images/64bc53a158e886d3f50a8cb8_Dog.png"
              loading="lazy"
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
                transformStyle: "preserve-3d",
              }}
              width="476"
              alt=""
              srcSet="/images/64bc53a158e886d3f50a8cb8_Dog-p-500.png 500w, /images/64bc53a158e886d3f50a8cb8_Dog-p-800.png 800w, /images/64bc53a158e886d3f50a8cb8_Dog.png 952w"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 60vw, (max-width: 991px) 48vw, (max-width: 1279px) 45vw, 476px"
              className="hero-dog"
            ></img>
          </div>
          <div className="hero-right">
            <div className="max-540-pixels">
              <div>
                <div
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
                    opacity: 1,
                    transformStyle: "preserve-3d",
                  }}
                  className="hero-fill-title"
                >
                  Welcome
                </div>
                <div style={{ display: "block" }} className="hidden">
                  <h1
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
                      opacity: 1,
                      transformStyle: "preserve-3d",
                    }}
                    className="hero-row-1"
                  >
                    Pet
                  </h1>
                </div>
                <div style={{ display: "block" }} className="hidden">
                  <h1
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
                      opacity: 1,
                      transformStyle: "preserve-3d",
                    }}
                    className="hero-row-2"
                  >
                    Doctor
                  </h1>
                </div>
              </div>
              <div className="hero-subtitle-box">
                <div
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
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
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
                    opacity: 1,
                    transformStyle: "preserve-3d",
                  }}
                  className="hero-subtitle"
                >
                  Comprehensive Veterinary Services and Premium Vet Products for
                  Your Furry Friends and Farms
                </p>
                <div className="hero-button-box">
                  <Link
                    href="#Intro"
                    data-w-id="2f7161f6-57f8-f7ea-2a3d-e6d478ed06e3"
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
                      opacity: 1,
                      transformStyle: "preserve-3d",
                    }}
                    className="button w-inline-block"
                  >
                    <div className="button-flex">
                      <div className="button-text">
                        <div>Start Here!</div>
                      </div>
                      <div className="button-arrow-box">
                        <div
                          className="button-arrow-container"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <div className="button-arrow-left"></div>
                          <div className="button-arrow-right"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
          opacity: 1,
          transformStyle: "preserve-3d",
        }}
        className="curve-bg"
      >
        <div className="curve-text-container">
          <div className="hero-mini-pic"></div>
          <div className="curve-text-box">
            <Link href="#" className="mini-title-link">
              Call Us Today &nbsp;990-004-450
            </Link>
          </div>
        </div>
        <div className="right-white-bg"></div>
      </div>

      <Link
        href="#Intro"
        data-w-id="741e283d-58c2-0d69-373b-d144ee7a52ed"
        style={{
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
          opacity: 1,
          transformStyle: "preserve-3d",
        }}
        className="scroll-down home w-inline-block w--current"
      >
        <img
          src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64c02f4e5960ed4f4cede06d_Scroll_arrow.png"
          loading="lazy"
          alt=""
          width="16"
          className="scroll-arrow"
          style={{
            transform:
              "translate3d(0px, 1.0129px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        />
      </Link>
    </>
  );
};

export default AppHero;
