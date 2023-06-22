import { holidayData } from "./holidayData";

const Holiday = () => {
  return (
    <div className="b-rad content-shadow-right tw-bg-brandingBlue-400 tw-p-4 tw-text-white">
      <div className="tw-pb-2 tw-text-center tw-text-2xl">
        <strong className="tw-font-bold">2023 Holiday Closures</strong>
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">
        {holidayData.map((holiday, idx) => (
          <div key={idx}>
            <strong>{holiday.holiday}</strong> - {holiday.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holiday;
