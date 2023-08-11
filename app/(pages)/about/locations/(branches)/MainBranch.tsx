import Container from "@/app/(components)/Container";
import LocationImg from "../LocationImg";
import ContentSection from "@/app/(components)/ContentSection";
import TwoCol from "@/app/(components)/TwoCol";
import LocationsCol from "../LocationsCol";
import LinkText from "@/app/(components)/LinkText";
import LocationColWrapper from "../LocationColWrapper";

const MainBranch = () => {
  return (
    <ContentSection>
      <Container>
        <TwoCol reverse>
          <LocationColWrapper>
            <LocationsCol title="Main Branch" largeTitle>
              <div>423 Gilmer Rd</div>
              <div>Longview, TX 75604</div>
              <div>Phone: <LinkText href="tel:+9037535588" label="903-753-5588" /> or <LinkText href="tel:+18004927283" label="800-492-7283" /></div>
              <div>Fax: 903-758-3903</div>
            </LocationsCol>
            <LocationsCol title="Lobby Hours">
              <div>Mon/Tue/Wed: 9:00 a.m. - 5:30 p.m.</div>
              <div>Thu/Fri: 9:00 a.m. - 6:00 p.m.</div>
              <div>Sat: 9:00 a.m. - 12 p.m.*</div>
            </LocationsCol>
            <LocationsCol title="Drive-Thru Hours">
              <div>Mon/Tues/Wed: 7:30 a.m. - 5:30 p.m.</div>
              <div>Thu/Fri: 7:30 a.m. - 6:00 p.m.</div>
              <div>Sat: 9:00 a.m. - 12 p.m.*</div>
            </LocationsCol>
          </LocationColWrapper>
          <LocationImg imgSrc="https://www.telcoplus.org/wp-content/uploads/2023/05/telco-sign.jpg" imgAlt="Main branch" />
        </TwoCol>
      </Container>
    </ContentSection>
  )
}

export default MainBranch;
