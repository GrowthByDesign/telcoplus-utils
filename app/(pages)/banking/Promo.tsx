import Container from "@/app/(components)/Container";
import Disclaimer from "@/app/(components)/Disclaimer";

type PromoProps = {
  imgSrc?: string;
  imgAlt?: string;
  disclaimer?: string;
};

const Promo = ({ imgSrc, imgAlt, disclaimer }: PromoProps) => {
  return (
    <div className="promo-wrapper tw-py-4 md:tw-py-8 xl:tw-pb-20 xl:tw-pt-60">
      <Container>
        {imgSrc && (
          <div className={disclaimer ? "tw-space-y-8" : ""}>
            <img
              src={imgSrc}
              alt={imgAlt}
              className="b-rad content-shadow-left tw-mx-auto"
            />
            {disclaimer && (
              <div className="tw-mx-auto tw-max-w-prose">
                <Disclaimer>{disclaimer}</Disclaimer>
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Promo;
