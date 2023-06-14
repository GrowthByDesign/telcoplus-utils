type LeftColItemProps = {
  children: React.ReactNode;
};

const LeftColItem = ({ children }: LeftColItemProps) => {
  return (
    <div className="tw-grid max-450-grid-cols-1-4 grid-cols-1-2 gap-x-035 tw-items-center">
      {children}
    </div>
  );
};

export default LeftColItem;
