"use client";
import { ContactForm } from "@components/app-contact/contact.component";
import OfficesComponent from "@components/location/location.component";
import DefaultLayout from "@layouts/default-layout";
import { Form, Spin } from "antd";
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
        title={"Connect with Linkavet - Your Pet's Wellbeing Starts Here"}
        description={
          "Have a question, need assistance, or simply want to reach out? We're here for you at Linkavet. Contact our friendly team of veterinary experts to discuss your pet's needs, inquire about our products, or schedule an appointment. Your pet's wellbeing is our priority, and we're dedicated to providing prompt and personalized support. Reach out via phone, email, or through our convenient online form. Connect with Linkavet – where every interaction is a step towards ensuring a happy and healthy life for your furry friends."
        }
        keywords="linkavet, connect, pets, experts, animal, farm, assistance, appointments"
        uri="contact-us"
      >
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
                    Call Us Today &nbsp;990-004-450
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

          <OfficesComponent />
          <div id="Intro" className="content-section contact-page">
            <div className="content-wrapper contact-us w-container">
              <div>
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
                              Isaiah Fonayzi Chah, Veterinary Doctor
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="_50-percent-column">
                    <div className="no-margins w-form">
                      <ContactForm />
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
