type TwoColProps = {
  children: React.ReactNode;
  reverse?: boolean,
};

const TwoCol = ({ children, reverse }: TwoColProps) => {

  const reverseClass = reverse ? "tw-flex-col-reverse" : ""

  return (
    <div className={`tw-flex tw-flex-col lg:tw-grid lg:tw-items-center tw-gap-8 md:tw-gap-12 lg:tw-grid-cols-2 lg:tw-gap-20 ${reverseClass} `.trim()} >
      {children}
    </div >
  );
};

export default TwoCol;
