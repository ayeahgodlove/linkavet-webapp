import { faqAPI } from "@store/api/faq_api";
import React from "react";
import FAQComponent from "./faq-item.component";
import { Col, Empty } from "antd";
import { motion } from "framer-motion";

const FaqSection = () => {
  const {
    data: faqs,
    isLoading: isLoadingFaq,
    isFetching: isFetchFaq,
  } = faqAPI.useFetchAllFaqsQuery(1);

  return (
    <div className="content-section double">
      <div className="content-wrapper w-container">
        <div className="heading-box">
          <div>
            <div className="title-regular">Faq</div>
          </div>
          <h3 className="no-top-margin">Frequently Asked Questions</h3>
        </div>

        {faqs && faqs.length ? (
          <motion.div
            className="box"
            initial={{ opacity: 0, y: "-5%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex e">
              <FAQComponent data={faqs} />
            </div>
          </motion.div>
        ) : (
          <Col span={24}>
            <div className="empty-wrap">
              <Empty />
            </div>
          </Col>
        )}
      </div>
    </div>
  );
};

export default FaqSection;
