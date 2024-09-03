"use client";
import AboutServiceItem from "@components/app-service/about-service-item.component";
import ExperienceCard from "@components/experience/experience-card.component";
import OfficesComponent from "@components/location/location.component";
import SpinnerList from "@components/shared/spinner-list";
import DefaultLayout from "@layouts/default-layout";
import { serviceAPI } from "@store/api/service_api";
import { Col, Empty, Spin } from "antd";
import { motion } from "framer-motion";
import { Suspense } from "react";

export default function IndexPage() {
  const {
    data: services,
    error,
    isLoading,
    isFetching,
  } = serviceAPI.useFetchAllServicesQuery({
    searchTitle: "",
  });

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
        title={"Our Services - LinkaVet | Comprehensive Veterinary Care"}
        description={
          "Discover the range of veterinary services we offer at LinkaVet, including preventive care, emergency services, and specialized treatments."
        }
        keywords="veterinary services, pet care, LinkaVet, animal care, preventive care, emergency vet"
        uri="services"
      >
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

          <div className="content-section inner-pages">
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

              {error && <h1>Something wrong...</h1>}
              {(isLoading || isFetching) && (
                <motion.div
                  className="box"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <SpinnerList />
                </motion.div>
              )}

              <div className="w-dyn-list">
                {services && services.length ? (
                  <div role="list" className="flex w-dyn-items">
                    {/* Service Item 1 */}
                    {services?.map((service) => (
                      <motion.div
                        className="box"
                        initial={{ opacity: 0, y: "-5%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        key={service.id}
                      >
                        <AboutServiceItem service={service} />
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
        </div>
        <OfficesComponent />
      </DefaultLayout>
    </Suspense>
  );
}
