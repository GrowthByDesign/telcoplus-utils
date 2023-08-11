type ContentSectionProps = {
  children: React.ReactNode;
  className?: string | undefined;
};

const ContentSection = ({ children, className }: ContentSectionProps) => {
  const classString =
    `[content-section] tw-mb-12 tw-py-4 md:tw-py-8 xl:tw-py-20 ${className || ""
      }`.trim();

  return <div className={classString}>{children}</div>;
};

export default ContentSection;
