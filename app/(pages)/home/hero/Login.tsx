import React from "react";
import Button from "../../../(components)/Button";

const Login = () => {
  return (
    <div className="b-rad home-hero-shadow tw-relative tw-bg-white tw-p-4 tw-text-center">
      <div className="tw-pb-2 tw-text-xl tw-font-semibold md:tw-pb-4 md:tw-text-2xl">
        Online Banking
      </div>
      <hr />
      <Button
        variant={true}
        wrapperClass="md:tw-pb-4 tw-pt-4"
        text="secure log in"
        link="https://dsot.onlinecu.com/telcopluscu/#/"
      />
      <div>
        <a
          className="tw-hidden tw-text-brandingGrey-900 md:tw-block"
          href="https://dsot.onlinecu.com/telcopluscu/#/forgot-password">
          Forgot username/password?
        </a>
      </div>
    </div>
  );
};

export default Login;
