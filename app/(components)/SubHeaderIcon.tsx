/* eslint-disable @next/next/no-img-element */
type SubHeaderIconProps = {
  heading: string;
};

const SubHeaderIcon = ({ heading }: SubHeaderIconProps) => {
  return (
    <div className="tw-flex tw-gap-2">
      <div>
        <img
          src="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/plus.png"
          alt="telco plus"
        />
      </div>
      <div className="tw-text-xl tw-font-medium tw-uppercase tw-tracking-widest tw-text-white">
        {heading}
      </div>
    </div>
  );
};

export default SubHeaderIcon;
