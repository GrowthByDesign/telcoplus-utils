import Button, { ButtonProps } from "./Button";
import Container from "./Container";

type SectionHeaderProps = {
  title: string;
  subHeading?: string;
  body?: string;
  buttonProps?: ButtonProps;
};

const SectionHeader = ({
  title,
  subHeading,
  body,
  buttonProps,
}: SectionHeaderProps) => {
  return (
    <div className="tw-border-b tw-bg-brandingBlue-400">
      <Container>
        <div>{subHeading}</div>
        <h2>{title}</h2>
        {body && <div>{body}</div>}
        {buttonProps && <Button {...buttonProps} />}
      </Container>
    </div>
  );
};

export default SectionHeader;
