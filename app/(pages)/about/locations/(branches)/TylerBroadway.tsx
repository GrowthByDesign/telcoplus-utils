import Container from "@/app/(components)/Container";
import LocationImg from "../LocationImg";
import ContentSection from "@/app/(components)/ContentSection";
import TwoCol from "@/app/(components)/TwoCol";
import LocationsCol from "../LocationsCol";
import LinkText from "@/app/(components)/LinkText";
import LocationColWrapper from "../LocationColWrapper";

const TylerBroadway = () => {
  return (
    <ContentSection>
      <Container>
        <TwoCol>
          <LocationImg
            imgSrc="https://www.telcoplus.org/wp-content/uploads/2023/03/TelcoPlusCU_Tyler-037-Edit-Edit-1.jpg"
            imgAlt="Broadway branch"
          />
          <LocationColWrapper>
            <LocationsCol title="Tyler - Broadway" largeTitle>
              <div>7395 S Broadway Ave</div>
              <div>Tyler, TX 75703</div>
              <div>
                Phone:{" "}
                <LinkText label="903-597-4321" href="tel:+1903-597-4321" />
              </div>
              <div>Fax: 903-534-3853</div>
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
        </TwoCol>
      </Container>
    </ContentSection>
  );
};

export default TylerBroadway;
