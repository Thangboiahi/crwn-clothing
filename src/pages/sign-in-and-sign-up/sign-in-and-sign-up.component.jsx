import React from 'react';

import SignIn from "./../../component/sign-in/sign-in.component";
import SignUp from "./../../component/sign-up/sign-up.component";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;