"use client";
import AboutServiceItem from "@components/app-service/about-service-item.component";
import ExperienceCard from "@components/experience/experience-card.component";
import OfficesComponent from "@components/location/location.component";
import DefaultLayout from "@layouts/default-layout";
import { Spin } from "antd";
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
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
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
                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
                              opacity: 1,
                              transformStyle: "preserve-3d",
                            }}
                            className="hero-inner-text"
                          >
                            Services
                          </h1>
                        </div>
                      </div>
                      <div style={{ display: "block" }} className="hidden">
                        <p
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
                            opacity: 1,
                            transformStyle: "preserve-3d",
                          }}
                          className="hero-subtitle"
                        >
                          Find here all the things we can do for your pet
                        </p>
                      </div>
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

          <div className="content-section">
            <div className="content-wrapper w-container">
              <div
                data-w-id="589d8496-d92b-5bc1-f03f-9b851f3cdac8"
                className="heading-full"
              >
                <h4 className="h4">Latest services</h4>
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
                <div role="list" className="flex w-dyn-items">
                  {/* Service Item 1 */}
                  <AboutServiceItem />
                  <AboutServiceItem />
                  <AboutServiceItem />
                  <AboutServiceItem />
                </div>
              </div>
            </div>
          </div>
        </div>
        <OfficesComponent />
      </DefaultLayout>
    </Suspense>
  );
}
