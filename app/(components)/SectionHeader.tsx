import Container from "./Container";

type SectionHeaderProps = {
  title: string;
  subHeading?: string;
};

const SectionHeader = ({ title, subHeading }: SectionHeaderProps) => {
  return (
    <div className="tw-border-b tw-bg-brandingBlue-400">
      <Container>
        <div>{subHeading}</div>
        <h2>{title}</h2>
      </Container>
    </div>
  );
};

export default SectionHeader;
