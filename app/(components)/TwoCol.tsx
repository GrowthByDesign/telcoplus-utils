type TwoColProps = {
  children: React.ReactNode;
};

const TwoCol = ({ children }: TwoColProps) => {
  return (
    <div className="tw-grid tw-items-center tw-gap-8 md:tw-gap-12 lg:tw-grid-cols-2 lg:tw-gap-20">
      {children}
    </div>
  );
};

export default TwoCol;
