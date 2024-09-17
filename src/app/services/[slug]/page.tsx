"use client";
import AboutServiceItem from "@components/app-service/about-service-item.component";
import SpinnerList from "@components/shared/spinner-list";
import { API_URL_UPLOADS_SERVICES } from "@constants/api-url";
import DefaultLayout from "@layouts/default-layout";
import { serviceAPI } from "@store/api/service_api";
import { format } from "@utils/format";
import { Col, Empty, Spin } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";
import { Suspense } from "react";

export default function IndexPage({ params }: { params: { slug: string } }) {
  const {
    data: service,
    isLoading,
    isFetching,
    error,
  } = serviceAPI.useGetSingleServiceBySlugQuery(params.slug);

  const { data: services } = serviceAPI.useFetchAllServicesQuery({
    searchTitle: "",
  });

  return (
    <>
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
          title={`Our Services - LinkaVet | ${service?.title}`}
          description={`${service?.short_description}`}
          keywords="veterinary services, pet care, LinkaVet, animal care, preventive care, emergency vet"
          uri={`services/${params.slug}`}
        >
          <div
            id="Top"
            style={{
              backgroundImage: `url("${API_URL_UPLOADS_SERVICES}/${service?.fileName}")`,
            }}
            className="utility-hero"
          >
            <div
              className="hero-bg color"
              style={{
                width: "0%",
                display: "block",
                height: "840px",
              }}
            ></div>
          </div>
          <div id="Intro" className="content-section inner-pages">
            <div className="content-wrapper w-container">
              <div className="flex-page">
                <div className="utility-left-column">
                  <div className="work-overview">
                    <div
                      data-w-id="be0c6e76-a0e6-1d6b-4259-5f4843ffd007"
                      className="side-block"
                    >
                      <div>
                        <div className="side-title">Price</div>
                      </div>
                      <div className="contact-details-box">
                        <div className="text-gray">
                          {format.number(service?.price!)}
                        </div>
                      </div>
                      <div
                        style={{
                          transform:
                            "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                        className="divider-line"
                      ></div>
                    </div>
                    <div
                      data-w-id="be0c6e76-a0e6-1d6b-4259-5f4843ffd00f"
                      className="side-block"
                    >
                      <div>
                        <div className="side-title">Services</div>
                      </div>
                      <div className="contact-details-box">
                        <div className="w-richtext">
                          <p>{service?.short_description}</p>
                        </div>
                      </div>
                      <div
                        style={{
                          transform:
                            "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                        className="divider-line"
                      ></div>
                    </div>
                    <div
                      data-w-id="be0c6e76-a0e6-1d6b-4259-5f4843ffd022"
                      className="side-block more"
                    >
                      <div>
                        <div className="side-title">Hire Us</div>
                      </div>
                      <div className="button-box">
                        <Link
                          href="/contact-us"
                          className="button-outline-small blue w-button"
                        >
                          Contact Us
                        </Link>
                      </div>
                      <div
                        style={{
                          transform:
                            "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                        className="divider-line"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="utility-right">
                  <div
                    data-w-id="be0c6e76-a0e6-1d6b-4259-5f4843ffd02b"
                    className="post-heading-box"
                  >
                    <h1>{service?.title}</h1>
                    <div>
                      <p style={{ fontSize: 15 }}>
                        {service?.short_description}
                      </p>
                    </div>
                    <div
                      style={{
                        transform:
                          "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                      className="divider-line"
                    ></div>
                  </div>
                  <div className="w-richtext">
                    <div
                      style={{ padding: 30, background: "#fff" }}
                      dangerouslySetInnerHTML={{
                        __html: service?.description as any,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="Intro" className="content-section inner-pages">
            <div className="content-wrapper w-container">
              <div
                data-w-id="32052f9a-805f-6f6d-118a-3401c92e347a"
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
              <div className="button-box">
                <a
                  href="/services"
                  className="button-outline-small blue w-button"
                >
                  Back to Services
                </a>
              </div>
            </div>
          </div>
        </DefaultLayout>
      </Suspense>
    </>
  );
}
