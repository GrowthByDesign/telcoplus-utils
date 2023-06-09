import React from "react";

const RightCol = () => {
  return (
    <div className="[right-col] tw-grid tw-gap-y-2 tw-px-4">
      <div className="tw-grid tw-items-center">
        <div className="tw-text-xs tw-text-auxBlue-600 tw-capitalize">
          starting at
        </div>
        <div className="tw-text-5xl tw-font-bold tw-text-auxBlue-800">
          $16,995
        </div>
      </div>
      <div className="tw-grid tw-items-center">
        <div className="tw-text-xs tw-text-auxBlue-600 tw-capitalize">
          buy now
        </div>
        <div className="tw-text-2xl tw-font-bold tw-text-auxBlue-800">
          $16,995
        </div>
      </div>
    </div>
  );
};

export default RightCol;
