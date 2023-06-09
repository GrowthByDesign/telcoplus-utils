import Container from "@/app/(components)/Container";
import ContentSection from "@/app/(components)/ContentSection";
import React from "react";
import CardDeck from "./CardDeck";

const page = () => {
  return (
    <ContentSection>
      <Container>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-mb-12">
          <div className="tw-font-bold tw-text-2xl">
            Credit Union Vehicles for Sale
          </div>
          <div className="tw-font-medium tw-mb-4">
            Contact Marshinick at{" "}
            <a className="tw-text-brandingBlue-400" href="tel+9037535588">
              903.753.5588
            </a>
          </div>
          <p>
            Classified Ads may be added to this page by Telco Plus Credit Union
            members. The ads will run 60 days unless cancelled prior to 60 days.
            Send information to{" "}
            <a
              className="tw-text-brandingBlue-400"
              href="mailto:webmaster@telcoplus.org">
              webmaster@telcoplus.org
            </a>{" "}
            to have your ad posted here.
          </p>
        </div>
        <CardDeck />
      </Container>
    </ContentSection>
  );
};

export default page;
