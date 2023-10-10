import Button from "../../../(components)/Button";
import Container from "../../../(components)/Container";
import HeroImg from "./HeroImg";
import Login from "./Login";

const Hero = () => {
  return (
    <div className="tw-relative">
      <Container className="tw-absolute tw-left-2/4 tw-z-10 tw-mx-auto tw-flex tw-h-full tw--translate-x-2/4 tw-flex-col tw-items-center tw-justify-around md:tw-flex-row lg:tw-justify-between">
        <div className="tw-flex tw-flex-col tw-gap-2 tw-text-white">
          <h1 className="tw-text-xl tw-font-medium">Oct. 9 – 23, 2023</h1>
          <h2 className="tw-pb-4 tw-text-2xl tw-font-bold md:tw-text-4xl">
            TOY REFI, 2+2=$50
          </h2>
          <Button
            text="Apply Now"
            link="https://www.telcoplus.org/loans/#loan-application"
          />
        </div>
        <Login />
      </Container>

      {/* <div className="tw-absolute tw-bottom-5 tw-right-10 tw-hidden tw-text-sm tw-italic tw-text-white/50 md:tw-block"> */}
      {/*   Crystal Young */}
      {/* </div> */}
      <HeroImg />
    </div>
  );
};

export default Hero;
