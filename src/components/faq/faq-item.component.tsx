import { IFaq } from "@model/faq.model";
import React from "react";

interface Props {
  data: IFaq[];
}
const FAQComponent: React.FC<Props> = ({ data }) => {
  const renderFaqItem = (faqItem: IFaq, index: number, column: string) => (
    <div
      key={index}
      className={`faq-item-${column}`}
      style={{
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="flex">
        <div className="faq-letter-box">
          <div className="question-letter">Q.</div>
        </div>
        <div className="expand">
          <p className="question">{faqItem.question}</p>
        </div>
      </div>
      <div className="flex">
        <div className="faq-letter-box">
          <div className="answer-letter">A.</div>
        </div>
        <div className="expand">
          <p>{faqItem.answer}</p>
        </div>
      </div>
    </div>
  );

  const leftColumnFaqs = data.filter((_, index) => index % 2 === 0);
  console.log("test: ", leftColumnFaqs)
  const rightColumnFaqs = data.filter((_, index) => index % 2 !== 0);

  return (
    <>
      <div className="left-faq-column">
        {leftColumnFaqs.map((faq, index) => renderFaqItem(faq, index, "left"))}
      </div>
      <div className="right-faq-column">
        {rightColumnFaqs.map((faq, index) =>
          renderFaqItem(faq, index, "right")
        )}
      </div>
    </>
  );
};

export default FAQComponent;
