import React from "react";

const AboutUs = () => {
  return (
    <div id="About-Us" className="content-section double">
      <div className="content-wrapper w-container">
        <div className="heading-box">
          <div>
            <div className="title-regular">About Us</div>
          </div>
          <h3 className="no-top-margin">What we can do for you</h3>
        </div>
        <div className="section-item">
          <div className="half-column">
            <div
              style={{
                opacity: 1,
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
              className="relative full-height"
            >
              <img
                src="/images/gulf_breeze_animal_hospital.jpg"
                loading="lazy"
                width="592"
                sizes="(max-width: 479px) 100vw, (max-width: 991px) 47vw, (max-width: 1279px) 48vw, 587.5px"
                alt=""
                srcSet="
                /images/gulf_breeze_animal_hospital.jpg 500w,
                /images/gulf_breeze_animal_hospital.jpg 800w,
                /images/gulf_breeze_animal_hospital.jpg 1080w,
                /images/gulf_breeze_animal_hospital.jpg 1184w
                "
              />
              <div className="change-this-image _1">
                <div
                  style={{ display: "block", width: "0%", height: "323.1px" }}
                  className="on-scroll-slide yellow-light"
                />
              </div>
            </div>
          </div>
          <div className="text-column">
            <div className="max-410-pixels">
              <div className="icon-bg" />
              <div>
                <h4>Let us help you with your pet health</h4>
              </div>
              <div>
                <p>
                  Comprehensive health check-ups to ensure your pet is in the
                  best condition.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-item mobile-reverse">
          <div className="text-column">
            <div className="max-410-pixels">
              <div className="icon-bg _2" />
              <div>
                <h4>Caring personal will take care of your pet</h4>
              </div>
              <div>
                <p>
                  Stay up-to-date with vaccinations to protect your pet from
                  common diseases.
                </p>
              </div>
            </div>
          </div>
          <div className="half-column">
            <div className="relative full-height">
              <img
                src="/images/64bc53a2b9c30f6719303c8d_hombre-afroamericano-vestido-camiseta-negra-sosteniendo-perrito.jpg"
                loading="lazy"
                width="592"
                sizes="(max-width: 479px) 100vw, (max-width: 991px) 47vw, (max-width: 1279px) 48vw, 587.5px"
                alt=""
                srcSet="
                /images/64bc53a2b9c30f6719303c8d_hombre-afroamericano-vestido-camiseta-negra-sosteniendo-perrito.jpg 500w,
                /images/64bc53a2b9c30f6719303c8d_hombre-afroamericano-vestido-camiseta-negra-sosteniendo-perrito.jpg 800w,
                /images/64bc53a2b9c30f6719303c8d_hombre-afroamericano-vestido-camiseta-negra-sosteniendo-perrito.jpg 1080w,
                /images/64bc53a2b9c30f6719303c8d_hombre-afroamericano-vestido-camiseta-negra-sosteniendo-perrito.jpg 1184w
                "
              />
            </div>
          </div>
        </div>
        <div className="section-item last">
          <div className="half-column">
            <div className="relative full-height">
              <img
                src="/images/nighthawk-shoots-BOuggN1tMEk-unsplash.jpg"
                loading="lazy"
                width="592"
                sizes="(max-width: 479px) 100vw, (max-width: 991px) 47vw, (max-width: 1279px) 48vw, 587.5px"
                alt=""
                srcSet="
                  /images/nighthawk-shoots-BOuggN1tMEk-unsplash.jpg 500w,
                  /images/nighthawk-shoots-BOuggN1tMEk-unsplash.jpg 800w,
                  /images/nighthawk-shoots-BOuggN1tMEk-unsplash.jpg 1080w,
                  /images/nighthawk-shoots-BOuggN1tMEk-unsplash.jpg 1184w
                "
              />
            </div>
          </div>
          <div className="text-column">
            <div className="max-410-pixels">
              <div className="icon-bg _3" />
              <div>
                <h4>Let us groom your precious and loved pet</h4>
              </div>
              <div>
                <p>
                  Specialized care for specific conditions, such as dermatology,
                  ophthalmology, and internal medicine, provided by our skilled
                  team of specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
