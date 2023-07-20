type BoardMemberProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  name: string;
  term?: string;
  contentShadow: string;
  marginSide: string;
};

const BoardMember = ({
  imgSrc,
  imgAlt,
  title,
  name,
  term,
  contentShadow,
  marginSide,
}: BoardMemberProps) => {
  return (
    <div className={marginSide}>
      <img
        src={imgSrc}
        className={`${contentShadow} b-rad tw-mx-auto tw-w-[70%] tw-max-w-[350px]`}
        alt={imgAlt}
      />
      <div className="tw-text-center">
        <div className="tw-pb-2 tw-pt-8 tw-font-serif tw-text-3xl tw-font-medium">
          {title}
        </div>
        <div className="tw-text-lg">{name}</div>
        {term && <div className="tw-text-lg">{term}</div>}
      </div>
    </div>
  );
};

export default BoardMember;
