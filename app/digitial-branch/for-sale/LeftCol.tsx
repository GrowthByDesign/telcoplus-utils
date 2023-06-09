import React from "react";
import CarIcon from "./CarIcon";
import LeftColItem from "./LeftColItem";
import MileIcon from "./MileIcon";
import PaintIcon from "./PaintIcon";

const LeftCol = () => {
  return (
    <div className="[left-col] tw-grid tw-gap-y-2 tw-px-4 tw-border-r border-light-blue max-450-order-2">
      <LeftColItem>
        <CarIcon />
        <div className="tw-text-sm tw-text-auxBlue-600">crew cab</div>
      </LeftColItem>
      <LeftColItem>
        <MileIcon />
        <div className="tw-text-sm tw-text-auxBlue-600">135,173 miles</div>
      </LeftColItem>
      <LeftColItem>
        <PaintIcon />
        <div className="tw-text-sm tw-text-auxBlue-600">White Exterior</div>
      </LeftColItem>
    </div>
  );
};

export default LeftCol;
