import React from "react";
import Button from "./(components)/Button";

const Login = () => {
  return (
    <div>
      <div>Online Banking</div>
      <hr />
      <Button
        text="secure log in"
        link="https://dsot.onlinecu.com/telcopluscu/#/"
      />
      <div>
        <a href="https://dsot.onlinecu.com/telcopluscu/#/forgot-password">
          Forgot username/password?
        </a>
      </div>
    </div>
  );
};

export default Login;
