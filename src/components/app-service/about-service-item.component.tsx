import React from "react";

const AboutServiceItem = () => {
  return (
    <div
      data-w-id="f4bc502a-61b1-1bd3-4186-00bc99ca68f4"
      className="service w-dyn-item"
    >
      <div>
        <a
          data-w-id="df7f9b84-eb79-05ea-8737-861ddd42fff6"
          href="/service/nails-trimming"
          className="service-image-block w-inline-block"
        >
          <img
            src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bc74d58af96339082818d7_Work-Bg-2.jpg"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 43vw, (max-width: 1279px) 44vw, 540.5px"
            width="1009"
            alt=""
            srcSet="
                      https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bc74d58af96339082818d7_Work-Bg-2-p-500.jpg 500w,
                      https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bc74d58af96339082818d7_Work-Bg-2-p-800.jpg 800w,
                      https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bc74d58af96339082818d7_Work-Bg-2.jpg 984w
                    "
          />
          <div
            style={{
              backgroundImage:
                "url('https://assets-global.website-files.com/64bc53263f9cb6f9722de0cd/64c068682e7f5a3fc4435dbc_close-up-doctor-helping-dog%20(1).jpg')",
            }}
            className="hover-image"
          >
            <div
              className="item-hover-overlay"
              style={{ display: "none", opacity: 0 }}
            ></div>
            <div className="blur-hover-overlay" style={{ opacity: 0 }}></div>
            <div
              className="button-hover"
              style={{
                transform:
                  "translate3d(0.028%, -0.03584%, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                opacity: 1,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              View Service
            </div>
            <div
              className="on-scroll-slide purpler"
              style={{
                display: "block",
                width: "0%",
                height: "566.175px",
              }}
              data-w-id="5cda5f64-cd0e-2f2a-4e0a-25d45a4e898b"
            ></div>
          </div>
        </a>
        <div className="services-text-box">
          <a href="/service/nails-trimming" className="service-preview-link">
            Nails Trimming
          </a>
          <div className="paragraph-service-box">
            <p>
              Reliable and caring pet service: grooming, walking, and
              boarding—ensuring your furry friends' happiness and well-being.
            </p>
          </div>
          <div className="button-box _20-pixels">
            <a
              href="/service/nails-trimming"
              className="link-block w-inline-block"
            >
              <div>View Service</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServiceItem;
