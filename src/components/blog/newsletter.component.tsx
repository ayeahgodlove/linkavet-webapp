import React from "react";

const NewsletterForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="blog-side-right">
      <h4 className="blog-side-title no-top-margin">Newsletter</h4>
      <div className="top-margin w-form">
        <form
          method="get"
          name="wf-form-Newsletter-Form"
          data-name="Newsletter Form"
          id="wf-form-Newsletter-Form"
          aria-label="Newsletter Form"
          onSubmit={handleSubmit}
        >
          <input
            className="text-field-input w-input"
            maxLength={256}
            name="name"
            data-name="Name"
            placeholder="Your Name"
            type="text"
            id="name"
            required
          />
          <input
            className="text-field-input w-input"
            maxLength={256}
            name="Email"
            data-name="Email"
            placeholder="Your Email"
            type="email"
            id="Email"
            required
          />
          <input
            type="submit"
            className="rounded-fill-button w-button"
            value="Submit"
            data-wait="Please wait..."
          />
        </form>
        <div
          className="success-message w-form-done"
          tabIndex={-1}
          role="region"
          aria-label="Newsletter Form success"
        >
          <img
            src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bc57ecb9c30f671933640a_comment%20(1).png"
            width="35"
            alt=""
          />
          <div className="top-margin">
            <div>Thank you! Your submission has been received!</div>
          </div>
        </div>
        <div
          className="error-message w-form-fail"
          tabIndex={-1}
          role="region"
          aria-label="Newsletter Form failure"
        >
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <div className="top-margin _40-pixels">
        <h4 className="blog-side-title">Find us</h4>
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
      <div className="top-margin _40-pixels">
        <h4 className="blog-side-title">Featured</h4>
        <div className="w-dyn-list">
          <div role="list" className="flex w-dyn-items">
            <div role="listitem" className="post-preview full w-dyn-item">
              <div className="relative-auto">
                <a
                  href="/post/purr-fectly-peaceful-managing-pet-anxiety-and-stress"
                  className="preview-link-block w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bd6895491c490b412ad614_Post-bg.jpg"
                    loading="lazy"
                    width="560"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 30vw, (max-width: 991px) 31vw, (max-width: 1279px) 22vw, 276.3671875px"
                    alt=""
                    srcSet="
                      https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bd6895491c490b412ad614_Post-bg-p-500.jpg  500w,
                      https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bd6895491c490b412ad614_Post-bg-p-800.jpg  800w,
                      https://assets-global.website-files.com/64bc51e851d39e9358ee467b/64bd6895491c490b412ad614_Post-bg.jpg       1073w
                    "
                  />
                  <div className="hover-image"></div>
                  <div className="hover-overlay">
                    <div className="button-outline white">Read more</div>
                  </div>
                </a>
              </div>
              <div className="preview-text-container full">
                <div>
                  <a href="/post-category/updates" className="category-link">
                    Updates
                  </a>
                </div>
                <div className="preview-link-box">
                  <a
                    href="/post/purr-fectly-peaceful-managing-pet-anxiety-and-stress"
                    className="preview-link small"
                  >
                    Purr-fectly Peaceful: Managing Pet Anxiety and Stress
                  </a>
                </div>
                <div className="link-block-box">
                  <div className="mintures-to-read">4 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-margin _40-pixels">
        <div className="blog-side-title">Category</div>
        <div className="w-dyn-list">
          <div role="list" className="w-dyn-items">
            <div role="listitem" className="bottom-margin w-dyn-item">
              <a href="/post-category/ask-pet-doctor" className="category-link">
                Ask Pet Doctor
              </a>
            </div>
            <div role="listitem" className="bottom-margin w-dyn-item">
              <a href="/post-category/updates" className="category-link">
                Updates
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
