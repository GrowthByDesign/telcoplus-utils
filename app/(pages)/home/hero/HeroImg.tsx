/* eslint-disable @next/next/no-img-element */
import React from "react";

const HeroImg = () => {
  return (
    <div className="home-hero-img tw-bg-brandingBlue-400">
      <img
        className="tw-mx-auto tw-min-h-[375px] tw-w-full tw-max-w-[1920px] tw-border-brandingBlue-500 tw-object-cover md:tw-min-h-[500px] xxxl:tw-border-l-4 xxxl:tw-border-r-4"
        src="https://www.telcoplus.org/wp-content/uploads/2023/08/new-branch.jpg"
        alt="hero image"
      />
    </div>
  );
};

export default HeroImg;
