/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";
import Container from "./Container";
import ContentSection from "./ContentSection";
import StyledList from "./StyledList";
import SubHeaderIcon from "./SubHeaderIcon";

const InnerPageHero = () => {
  const heroList = [
    "Low interest rates",
    "Fast Processing",
    "Convenient Repayment Terms",
  ];

  return (
    <div className="tw-bg-brandingBlue-400 tw-py-12 tw-text-white">
      <Container>
        <div className="tw-grid tw-items-center tw-gap-8 lg:tw-grid-cols-2">
          <div className="tw-flex tw-flex-col tw-gap-4">
            <SubHeaderIcon heading="personal" />
            <h2 className="primary-heading tw-font-semibold tw-capitalize">
              personal loans
            </h2>
            <div>
              <strong>Personal Loans</strong> from Telco Plus Credit Union can
              be used for anything personal such as consolidating debt,
              financing a vacation, or paying for home repairs. Our Personal
              Loans come with:
            </div>
            {heroList.map((item, index) => (
              <StyledList key={index} liText={item} />
            ))}

            <div>
              Personal loans with Telco Plus Credit Union can be unsecured loans
              or secured with collateral so you get a lower interest rate. We’re
              happy to help our members reach their goals at reasonable cost!
            </div>
            <div>
              Telco Plus Credit Union members can apply for loans using Online
              Banking and non-members can apply with the application on our
              website.
            </div>
            <Button
              link="https://www.telcoplus.org/loans/#loan-application"
              text="apply now"
            />
          </div>
          <div className="tw-mx-auto">
            <img
              className="content-shadow-right"
              src="https://www.telcoplus.org/wp-content/uploads/2023/06/Christmas-in-July-23-website.jpg"
              alt="hero"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InnerPageHero;
