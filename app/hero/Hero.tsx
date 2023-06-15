import Button from "../(components)/Button";
import Container from "../(components)/Container";
import HeroImg from "./HeroImg";
import Login from "./Login";

const Hero = () => {
  return (
    <div className="tw-relative">
      <Container className="tw-absolute tw-left-2/4 tw-z-10 tw-mx-auto tw-flex tw-h-full tw--translate-x-2/4 tw-flex-col tw-items-center tw-justify-around md:tw-flex-row lg:tw-justify-between">
        <div className="tw-flex tw-flex-col tw-gap-2 tw-text-white lg:tw-gap-4">
          <h1 className="tw-text-3xl tw-font-bold md:tw-text-5xl lg:tw-text-7xl">
            EARN MORE
          </h1>
          <h2 className="tw-pb-4 tw-text-2xl tw-font-semibold md:tw-text-3xl lg:tw-pb-8 lg:tw-text-5xl">
            High CD Rates!
          </h2>
          <Button text="learn more" link="https://www.telcoplus.org/rates/" />
        </div>
        <Login />
      </Container>
      <HeroImg />
    </div>
  );
};

export default Hero;
