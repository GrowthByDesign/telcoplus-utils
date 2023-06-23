type ContentSectionProps = {
  children: React.ReactNode;
  className?: string;
};

const ContentSection = ({ children, className }: ContentSectionProps) => {
  return (
    <div
      className={`[content-section] tw-mb-12 tw-py-4 md:tw-py-8 xl:tw-py-20 ${className}`}>
      {children}
    </div>
  );
};

export default ContentSection;
