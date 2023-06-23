type StyledListProps = {
  liText: string;
};

const StyledList = ({ liText }: StyledListProps) => {
  return (
    <ul className="telco-list tw-flex tw-list-inside tw-flex-col tw-gap-2">
      <li>{liText}</li>
    </ul>
  );
};

export default StyledList;
