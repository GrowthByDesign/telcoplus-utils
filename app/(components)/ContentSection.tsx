type ContentSectionProps = {
  children: React.ReactNode;
};

const ContentSection = ({ children }: ContentSectionProps) => {
  return (
    <div className="[content-section] tw-py-4 md:tw-py-8 xl:tw-py-20 tw-mb-12">
      {children}
    </div>
  );
};

export default ContentSection;
