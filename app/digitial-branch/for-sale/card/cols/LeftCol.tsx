import LeftColItem from "./LeftColItem";
import { Repo } from "../../data";
import CarIcon from "../icons/CarIcon";
import MileIcon from "../icons/MileIcon";
import PaintIcon from "../icons/PaintIcon";

const LeftCol = ({ engine, mileage, color }: Repo) => {
  return (
    <div className="[left-col] tw-grid tw-gap-y-2 tw-px-4 tw-border-r border-light-blue max-450-order-2">
      <LeftColItem>
        <CarIcon />
        <div className="tw-text-sm tw-text-auxBlue-600">{engine}</div>
      </LeftColItem>
      <LeftColItem>
        <MileIcon />
        <div className="tw-text-sm tw-text-auxBlue-600">{mileage}</div>
      </LeftColItem>
      <LeftColItem>
        <PaintIcon />
        <div className="tw-text-sm tw-text-auxBlue-600">{color}</div>
      </LeftColItem>
    </div>
  );
};

export default LeftCol;
