import useWindowSize from "@hook/shared/window-resize.hook";
import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { width } = useWindowSize();
  return (
    <div
      data-w-id="9d98ae61-a124-594f-54ef-57e8e5e32507"
      style={{
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
      className="content-section testimonials"
    >
      <div className="content-wrapper w-container">
        <div className="heading-box">
          <div>
            <div className="title-regular">Testimonials</div>
          </div>
          <h3 className="h3 small">What people say about us</h3>
        </div>
      </div>

      {/* slic */}
      <div
        className="slider-container"
        style={{ padding: width > 767 ? "0 40px" : "0 24px" }}
      >
        <div className="testimonials w-slider">
          <Slider {...settings}>
            <div
              className="testimonial w-slide"
              aria-label="1 of 6"
              role="group"
              style={{ transform: "translateX(0px)", opacity: 1 }}
            >
              <div>
                <div className="testimonial-heading">
                  <div className="testimonial-pic _1"></div>
                  <div className="expand-center">
                    <div>
                      <div className="title-semi-bold medium">Laura Sheen</div>
                      <div>
                        <p className="text-mini">Eyebrows Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    They saved my furry friend's life! Grateful for their
                    expertise and compassion. Highly recommended!
                  </p>
                </div>
              </div>
            </div>
            <div
              className="testimonial w-slide"
              aria-label="2 of 6"
              role="group"
              style={{ transform: "translateX(0px)", opacity: 1 }}
            >
              <div>
                <div className="testimonial-heading">
                  <div className="testimonial-pic _2"></div>
                  <div className="expand-center">
                    <div>
                      <div className="title-semi-bold medium">Laura Sheen</div>
                      <div>
                        <p className="text-mini">Eyebrows Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    Best pet shop ever! A variety of pet supplies and friendly
                    staff. My fur babies are delighted!
                  </p>
                </div>
              </div>
            </div>
            <div
              className="testimonial w-slide"
              aria-label="3 of 6"
              role="group"
              style={{ transform: "translateX(0px)", opacity: 1 }}
            >
              <div>
                <div className="testimonial-heading">
                  <div className="testimonial-pic _3"></div>
                  <div className="expand-center">
                    <div>
                      <div className="title-semi-bold medium">Laura Sheen</div>
                      <div>
                        <p className="text-mini">Eyebrows Client</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    Professional and caring team. Our pets receive top-notch
                    treatment every visit. Thank you for all!
                  </p>
                </div>
              </div>
            </div>
            <div
              className="testimonial w-slide"
              aria-label="4 of 6"
              role="group"
              aria-hidden="true"
              style={{ transform: "translateX(0px)", opacity: 1 }}
            >
              <div aria-hidden="true">
                <div className="testimonial-heading" aria-hidden="true">
                  <div className="testimonial-pic _4" aria-hidden="true"></div>
                  <div className="expand-center" aria-hidden="true">
                    <div aria-hidden="true">
                      <div
                        className="title-semi-bold medium"
                        aria-hidden="true"
                      >
                        Laura Sheen
                      </div>
                      <div aria-hidden="true">
                        <p className="text-mini" aria-hidden="true">
                          Eyebrows Client
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true">
                  <p aria-hidden="true">
                    Found the perfect pet at their shop! Healthy and happy. The
                    staff made the adoption process seamless.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="testimonial w-slide"
              aria-label="5 of 6"
              role="group"
              aria-hidden="true"
              style={{ transform: "translateX(0px)", opacity: 1 }}
            >
              <div aria-hidden="true">
                <div className="testimonial-heading" aria-hidden="true">
                  <div className="testimonial-pic _5" aria-hidden="true"></div>
                  <div className="expand-center" aria-hidden="true">
                    <div aria-hidden="true">
                      <div
                        className="title-semi-bold medium"
                        aria-hidden="true"
                      >
                        Laura Sheen
                      </div>
                      <div aria-hidden="true">
                        <p className="text-mini" aria-hidden="true">
                          Schnauzer Owner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true">
                  <p aria-hidden="true">
                    Our go-to vet for years. Trustworthy, skilled, and attentive
                    to our pet&apos;s needs. Wouldn&apos;t go anywhere else!
                  </p>
                </div>
              </div>
            </div>
            <div
              className="testimonial w-slide"
              aria-label="6 of 6"
              role="group"
              aria-hidden="true"
              style={{ transform: "translateX(0px)", opacity: 1 }}
            >
              <div aria-hidden="true">
                <div className="testimonial-heading" aria-hidden="true">
                  <div className="testimonial-pic _6" aria-hidden="true"></div>
                  <div className="expand-center" aria-hidden="true">
                    <div aria-hidden="true">
                      <div
                        className="title-semi-bold medium"
                        aria-hidden="true"
                      >
                        Laura Sheen
                      </div>
                      <div aria-hidden="true">
                        <p className="text-mini" aria-hidden="true">
                          Eyebrows Client
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true">
                  <p aria-hidden="true">
                    A one-stop-shop for all my pet needs! Friendly service and
                    top-quality products. Always satisfied, thanks!
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
