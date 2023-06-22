import Container from "@/app/(components)/Container";
import ContentSection from "@/app/(components)/ContentSection";
import SectionHeader from "@/app/(components)/SectionHeader";
import TwoCol from "@/app/(components)/TwoCol";
import Holiday from "./Holiday";
import News from "./News";

const page = () => {
  return (
    <div>
      <SectionHeader title="current news" subHeading="telco today" />
      <ContentSection>
        <Container>
          <TwoCol>
            <News />
            <Holiday />
          </TwoCol>
        </Container>
      </ContentSection>
    </div>
  );
};

export default page;
