import Container from "@/app/(components)/Container";
import SectionHeader from "@/app/(components)/SectionHeader";
import BoardMember from "./BoardMember";
import { leadershipData } from "./leadershipData";

const page = () => {
  return (
    <div>
      <SectionHeader
        subHeading={"our team"}
        title={"Leadership"}
        buttonProps={{ text: "learn more", link: "#" }}
      />
      <Container>
        <div>yea</div>
        <div className="tw-grid  tw-items-baseline tw-gap-20 md:tw-grid-cols-2">
          {leadershipData.map((leader, idx) => (
            <BoardMember
              key={idx}
              imgSrc={leader.imgSrc}
              imgAlt={leader.name}
              contentShadow={
                idx % 2 === 0 ? "content-shadow-left" : "content-shadow-right"
              }
              marginSide={idx % 2 === 0 ? "md:tw-ml-auto" : "md:tw-mr-auto"}
              title={leader.title}
              name={leader.name}
              term={leader.term}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
