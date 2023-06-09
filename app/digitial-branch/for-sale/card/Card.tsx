import { Repo } from "../data";
import LeftCol from "./cols/LeftCol";
import RightCol from "./cols/RightCol";

/* eslint-disable @next/next/no-img-element */
const Card = ({
  imgSrc,
  shadowDirection,
  title,
  engine,
  mileage,
  color,
  startingPrice,
  buyPrice,
}: Repo) => {
  if (shadowDirection === "left") {
    shadowDirection = "hero-shadow-left";
  } else if (shadowDirection === "right") {
    shadowDirection = "hero-shadow-right";
  } else if (shadowDirection === "middle") {
    shadowDirection = "repo-shadow";
  }

  return (
    <div
      className={`tw-mx-auto tw-max-w-[433px] b-rad tw-h-fit ${shadowDirection}`}>
      <img
        className="rounded-t-b-rad tw-max-h-[294px] tw-object-cover tw-w-[433px]"
        src={imgSrc}
        alt={title}
        height="294"
        width="433"
      />
      <div className="tw-text-brandingBlue-400 tw-font-bold tw-text-center tw-text-lg fs-18 tw-py-2">
        {title}
      </div>
      <div className="[content] py-0875 tw-grid grid-cols-85-1 tw-gap-y-4 tw-bg-auxBlue-100 tw-border-t border-light-blue rounded-b-b-rad">
        <LeftCol engine={engine} mileage={mileage} color={color} />
        <RightCol startingPrice={startingPrice} buyPrice={buyPrice} />
      </div>
    </div>
  );
};

export default Card;
