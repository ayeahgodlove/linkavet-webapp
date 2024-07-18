import { API_URL_UPLOADS_SERVICES } from "@constants/api-url";
import { IService } from "@model/service";
import Link from "next/link";
import React from "react";

interface IProp {
  service: IService;
}
const AboutServiceItem: React.FC<IProp> = ({ service }) => {
  return (
    <div role="listitem" className="service w-dyn-item">
      <div>
        <a
          data-w-id="4f54cd38-373d-3051-7273-04df831ac957"
          href={`/services/${service.slug}`}
          className="service-image-block w-inline-block"
        >
          <img
            src={`${API_URL_UPLOADS_SERVICES}/${service.fileName}`}
            loading="lazy"
            sizes="(max-width: 479px) 90vw, (max-width: 767px) 43vw, (max-width: 1279px) 44vw, 540.5px"
            width="1009"
            alt={service.title}
          />
          <div
            style={{
              backgroundImage:
                `url("{${API_URL_UPLOADS_SERVICES}/${service.fileName}}")`,
            }}
            className="hover-image"
          >
            <div
              style={{ display: "none", opacity: 0 }}
              className="item-hover-overlay"
            ></div>
            <div style={{ opacity: 0 }} className="blur-hover-overlay"></div>
            <div
              style={{
                transform:
                  "translate3d(0%, 0%, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                opacity: 0,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
              className="button-hover"
            >
              View Service
            </div>
          </div>
        </a>
        <div className="services-text-box">
          <Link
            href={`/services/${service.slug}`}
            className="service-preview-link"
          >
            {service.title}
          </Link>
          <div className="paragraph-service-box">
            <p>{service.short_description}</p>
          </div>
          <div className="button-box _20-pixels">
            <a
              href={`/services/${service.slug}`}
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
