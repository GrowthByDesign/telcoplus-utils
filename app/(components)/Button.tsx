type ButtonProps = {
  text: string;
  link: string;
  variant?: boolean;
};

const Button = ({ text, link }: ButtonProps) => {
  return (
    <div className="tw-inline-flex tw-rounded-full">
      <a
        className="tw-font-bold tw-py-[0.8rem] tw-px-5 tw-text-brandingBlue-400 tw-bg-white tw-button-shadow tw-capitalize tw-border-0 tw-leading-4 tw-btn"
        href={link}>
        {text}
      </a>
    </div>
  );
};

export default Button;
