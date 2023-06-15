import Button from "./(components)/Button";
import Container from "./(components)/Container";
import HeroImg from "./HeroImg";
import Login from "./Login";

const Hero = () => {
  return (
    <div>
      <Container>
        <h1 className="tw-font-bold tw-text-4xl">EARN MORE</h1>
        <h2 className="tw-text-3xl tw-font-semibold">High CD Rates!</h2>
        <Button text="learn more" link="/open-account" />
        <Login />
      </Container>
      <HeroImg />
    </div>
  );
};

export default Hero;
