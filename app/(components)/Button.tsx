type ButtonProps = {
  text: string;
  link: string;
  wrapperClass?: string;
  variant?: boolean;
};

const handleVariant = (variant: ButtonProps["variant"]) => {
  if (variant) {
    return "tw-bg-brandingBlue-400 tw-text-white";
  } else {
    return "tw-bg-white tw-text-brandingBlue-400";
  }
};

const Button = ({ text, link, wrapperClass, variant }: ButtonProps) => {
  return (
    <div className={`tw-inline-flex ${wrapperClass}`}>
      <a
        className={`tw-button-shadow tw-btn tw-rounded-full tw-border-0 tw-px-5 tw-py-[0.8rem] tw-font-bold tw-capitalize tw-leading-4 ${handleVariant(
          variant
        )}`}
        href={link}>
        {text}
      </a>
    </div>
  );
};

export default Button;
