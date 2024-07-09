import React from "react";

interface Props {
  title: string;
  description: string;
  total: string;
  className: string;
}
const ExperienceCard: React.FC<Props> = ({ title, description, total, className }) => {
  return (
      <div className={`number-item ${className}`}>
        <div className={`numbers-feature`}></div>
        <div className="top-margin _40-pixels">
          <div className="number">
            {total}
          </div>
        </div>
        <div className="top-margin _20-pixels">
          <h4 className="h4-big no-top-margin">{title}</h4>
          <div className="font-light">{description}</div>
        </div>
      </div>
  );
};

export default ExperienceCard;
