import Container from "@/app/(components)/Container";
import LocationImg from "../LocationImg";
import ContentSection from "@/app/(components)/ContentSection";
import TwoCol from "@/app/(components)/TwoCol";
import LocationsCol from "../LocationsCol";
import LinkText from "@/app/(components)/LinkText";
import LocationColWrapper from "../LocationColWrapper";

const Tyler1010 = () => {
  return (
    <ContentSection>
      <Container>
        <TwoCol reverse>
          <LocationColWrapper>
            <LocationsCol title="Tyler - 1010" largeTitle>
              <div>1010 S SE Loop 323</div>
              <div>Tyler, TX 75701</div>
              <div>Phone: <LinkText label="903-508-2570" href="tel:+1903-508-2570" /></div>
              <div>Fax: 903-508-2571</div>
            </LocationsCol>
            <LocationsCol title="Lobby Hours">
              <div>Mon/Tue/Wed: 9:00 a.m. - 5:30 p.m.</div>
              <div>Thu/Fri: 9:00 a.m. - 6:00 p.m.</div>
              <div>Sat: 9:00 a.m. - 12 p.m.*</div>
            </LocationsCol>
            <LocationsCol title="Drive-Thru Hours">
              <div>Mon/Tues/Wed: 8:00 a.m. - 5:30 p.m.</div>
              <div>Thu/Fri: 8:00 a.m. - 6:00 p.m.</div>
              <div>Sat: 9:00 a.m. - 12:00 p.m.*</div>
            </LocationsCol>
          </LocationColWrapper>
          <LocationImg imgSrc="https://www.telcoplus.org/wp-content/uploads/2023/08/1010-edit-1.jpg" imgAlt="1010 branch" />
        </TwoCol>
        <div className="tw-pt-10 tw-text-center tw-font-semibold">*Closed on Saturdays that fall in a 3 day holiday weekend schedule. Please see Closed Schedule.</div>
      </Container>
    </ContentSection>
  )
}

export default Tyler1010;
