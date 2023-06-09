import CarIcon from "./CarIcon";
import LeftCol from "./LeftCol";
import RightCol from "./RightCol";

/* eslint-disable @next/next/no-img-element */
const Card = () => {
  return (
    <div className="mx-auto tw-max-w-[433px] b-rad tw-h-fit hero-shadow-left">
      <img
        className="tw-w-full rounded-t-b-rad"
        src="https://www.telcoplus.org/wp-content/uploads/2023/05/2014-ford.jpg"
        alt=""
      />
      <div className="tw-text-brandingBlue-400 tw-font-bold tw-text-center tw-text-lg fs-18 tw-py-2">
        2014 Ford F-150 King Ranch
      </div>
      <div className="[content] py-0875 tw-grid grid-cols-85-1 tw-gap-y-4 tw-bg-auxBlue-100 tw-border-t border-light-blue rounded-b-b-rad">
        <LeftCol />
        <RightCol />
      </div>
    </div>
  );
};

export default Card;
