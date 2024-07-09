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
      <DefaultLayout>
        <div style={{ opacity: 1, width: "100%" }} className="content">
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
                  src="/images/64c02c7b9a4329d01067d635_PET-OWNER.png"
                  loading="lazy"
                  style={{ opacity: 1 }}
                  width="418.5"
                  alt=""
                  srcSet="/images/64c02c7b9a4329d01067d635_PET-OWNER.png 500w, /images/64c02c7b9a4329d01067d635_PET-OWNER.png 837w"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 60vw, (max-width: 991px) 47vw, 418.5px"
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
                        Get to
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
                        Know Us
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
                      <Link
                        href="#Intro"
                        data-w-id="f1c62d93-06a3-d2f3-496b-3aafbaf00aa8"
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          opacity: 1,
                          transformStyle: "preserve-3d",
                        }}
                        className="hero-button w-inline-block w--current"
                      >
                        <div className="hero-button-flex">
                          <img
                            src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64c0134284a173a1649028d1_About-girl.png"
                            loading="lazy"
                            sizes="(max-width: 1279px) 51px, (max-width: 1439px) 4vw, 51px"
                            width="51"
                            alt=""
                            srcSet="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64c0134284a173a1649028d1_About-girl-p-500.png 500w, https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64c0134284a173a1649028d1_About-girl-p-800.png 800w, https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64c0134284a173a1649028d1_About-girl.png 908w"
                            className="dog-button"
                          />
                          <div className="button-flex-height">
                            <div className="hero-button-text">
                              <div>Learn More</div>
                            </div>
                          </div>
                        </div>
                      </Link>
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
                  <a href="#" className="mini-title-link">
                    Call Us Today &nbsp;800-236-789
                  </a>
                </div>
              </div>
              <div className="right-white-bg"></div>
            </div>
            <Link
              href="#Intro"
              data-w-id="d44b218e-9742-e759-ef72-5c529736aad4"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                opacity: 1,
                transformStyle: "preserve-3d",
              }}
              className="scroll-down w-inline-block w--current"
            >
              <img
                src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64c02f4e5960ed4f4cede06d_Scroll_arrow.png"
                loading="lazy"
                alt=""
                width="16"
                className="scroll-arrow"
                style={{
                  transform:
                    "translate3d(0px, 1.5905px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              />
            </Link>
            <div
              style={{ width: "0%", display: "block", height: "767.138px" }}
              className="hero-bg"
            ></div>
          </div>

          <div id="Intro" className="content-section contact-page">
            <div className="content-wrapper contact-us w-container">
              <div>
                <div className="heading-box-full">
                  <div className="title-regular">Our Offices</div>
                  <h2 className="no-top-margin">Find us everywhere...</h2>
                </div>
                <div className="bottom-line">
                  <div className="flex full-width">
                    <div className="left-contact-column wide">
                      <div
                        className="relative"
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <img
                          src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf116f4176fe2fb1c0070c_Bg-1.jpg"
                          width="635.5"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 53vw, (max-width: 1279px) 54vw, 635.5px"
                          srcSet="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf116f4176fe2fb1c0070c_Bg-1-p-500.jpeg 500w, https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf116f4176fe2fb1c0070c_Bg-1-p-800.jpeg 800w, https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf116f4176fe2fb1c0070c_Bg-1-p-1080.jpeg 1080w, https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bf116f4176fe2fb1c0070c_Bg-1.jpg 1271w"
                          alt=""
                        />
                        <div className="change-this-image _11">
                          <div
                            className="on-scroll-slide purple"
                            style={{
                              display: "block",
                              width: "0%",
                              height: "424.2px",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="top-margin _30-pixels">
                        <div className="flex-mobile-vertical">
                          <div
                            className="contact-column"
                            style={{
                              opacity: 1,
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            <div>
                              <div className="contact-icon pin"></div>
                            </div>
                            <div className="expand">
                              <h5 className="h5">Address</h5>
                              <div>
                                <p>
                                  Evergreen 27 <br />
                                  San Francisco, CA
                                  <br />
                                  90210
                                  <br />
                                  USA
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="contact-column"
                            style={{
                              opacity: 1,
                              transform:
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                              transformStyle: "preserve-3d",
                            }}
                          >
                            <div>
                              <div className="contact-icon clock"></div>
                            </div>
                            <div className="expand">
                              <h5 className="h5">Schedule</h5>
                              <div>
                                <p>
                                  Monday to Friday
                                  <br />
                                  9:00 am to 5:00 pm
                                  <br />
                                  <strong>Holidays</strong>
                                  <br />
                                  9:00 am to 3:00 pm
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right-contact-column">
                      <div className="max-width-310">
                        <div
                          style={{
                            opacity: 1,
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <div className="title-regular">Phone</div>
                          <div>
                            <a href="#" className="contact-link">
                              800-345-678
                            </a>
                          </div>
                        </div>
                        <div
                          className="top-margin _30-pixels"
                          style={{
                            opacity: 1,
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <div>Email</div>
                          <div>
                            <a href="#" className="contact-link">
                              hello@website.com
                            </a>
                          </div>
                        </div>
                        <div
                          className="top-margin _30-pixels"
                          style={{
                            opacity: 1,
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <div>Social Networks</div>
                          <div className="top-margin">
                            <div className="social-icons">
                              <div>
                                <a
                                  href="#"
                                  target="_blank"
                                  className="social-icon-rounded w-inline-block"
                                >
                                  <div className="social-icons-container">
                                    <div className="social-icon-up fb"></div>
                                    <div className="social-icon-down fb"></div>
                                  </div>
                                </a>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  target="_blank"
                                  className="social-icon-rounded twitter w-inline-block"
                                >
                                  <div className="social-icons-container">
                                    <div className="social-icon-up tw"></div>
                                    <div className="social-icon-down tw"></div>
                                  </div>
                                </a>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  target="_blank"
                                  className="social-icon-rounded twitter w-inline-block"
                                >
                                  <div className="social-icons-container">
                                    <div className="social-icon-up youtube"></div>
                                    <div className="social-icon-down youtube"></div>
                                  </div>
                                </a>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  target="_blank"
                                  className="social-icon-rounded w-inline-block"
                                >
                                  <div className="social-icons-container">
                                    <div className="social-icon-up pinterest"></div>
                                    <div className="social-icon-down pinterest"></div>
                                  </div>
                                </a>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  target="_blank"
                                  className="social-icon-rounded w-inline-block"
                                >
                                  <div className="social-icons-container">
                                    <div className="social-icon-up tiktok"></div>
                                    <div className="social-icon-down tiktok"></div>
                                  </div>
                                </a>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  target="_blank"
                                  className="social-icon-rounded w-inline-block"
                                >
                                  <div className="social-icons-container">
                                    <div className="social-icon-up linkedin"></div>
                                    <div className="social-icon-down linkedin"></div>
                                  </div>
                                </a>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  target="_blank"
                                  className="social-icon-rounded instagram w-inline-block"
                                >
                                  <div className="social-icons-container">
                                    <div className="social-icon-up insta"></div>
                                    <div className="social-icon-down insta"></div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-contact">
                    <div className="_50-percent-column left-padding">
                      <div className="max-442-pixels">
                        <div>Contact form</div>
                        <h4>We'll answer all your messages in no time</h4>
                        <div>
                          <p>
                            Feel refreshed, less stressed and more balanced with
                            over 50 spa treatments and services.
                          </p>
                        </div>
                        <div className="top-margin _30-pixels">
                          <div className="flex-center">
                            <div>
                              <div className="profile-picture"></div>
                            </div>
                            <div>
                              <div className="text-small">
                                Roberta Smith, Pet Doctor
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_50-percent-column">
                      <div className="no-margins w-form">
                        <form
                          method="get"
                          name="wf-form-Contact-Form"
                          data-name="Contact Form"
                          style={{
                            opacity: 1,
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                          data-w-id="ddd2f0b9-14a9-4814-ddaa-8fc107e60f80"
                          id="email-form"
                          className="contact-form"
                          data-wf-page-id="64bd732599271195afdb7c96"
                          data-wf-element-id="ddd2f0b9-14a9-4814-ddaa-8fc107e60f80"
                          aria-label="Contact Form"
                        >
                          <input
                            className="form-field w-input"
                            maxLength={256}
                            name="Name"
                            data-name="Name"
                            placeholder="Your Name*"
                            type="text"
                            id="field"
                            required
                          />
                          <input
                            className="form-field no-margin w-input"
                            maxLength={256}
                            name="Email"
                            data-name="Email"
                            placeholder="Your Email*"
                            type="email"
                            id="field"
                            required
                          />
                          <input
                            className="form-field no-margin w-input"
                            maxLength={256}
                            name="Mobile"
                            data-name="Mobile"
                            placeholder="Your Mobile"
                            type="tel"
                            id="field"
                          />
                          <select
                            name="Service-2"
                            data-name="Service 2"
                            id="Service-2"
                            className="select-field w-select"
                          >
                            <option value="">Service...</option>
                            <option value="Eyelash Extensions">
                              Nails Trimming
                            </option>
                            <option value="Facial Mask">Pet Grooming</option>
                            <option value="Massage Therapy">Pet Vaccine</option>
                          </select>
                          <textarea
                            placeholder="Your Message"
                            maxLength={5000}
                            required
                            name="Message-2"
                            data-name="Message 2"
                            id="field"
                            className="textarea w-input"
                          ></textarea>
                          <input
                            type="submit"
                            data-wait="Please wait..."
                            className="contact-button w-button"
                            value="Submit"
                          />
                        </form>
                        <div
                          className="success-message w-form-done"
                          tabIndex={-1}
                          role="region"
                          aria-label="Contact Form success"
                        >
                          <img
                            src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bc57ecb9c30f671933640a_comment%20(1).png"
                            width="35"
                            alt=""
                          />
                          <div className="top-margin">
                            <div>
                              Thank you! Your submission has been received!
                            </div>
                          </div>
                        </div>
                        <div
                          className="error-message w-form-fail"
                          tabIndex={-1}
                          role="region"
                          aria-label="Contact Form failure"
                        >
                          <div>
                            Oops! Something went wrong while submitting the
                            form.
                          </div>
                        </div>
                      </div>
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
