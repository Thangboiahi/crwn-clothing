import React from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import Loading from "./../loading/loading.component";

import { auth, createUserProfileDocument } from "./../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isLoading: false
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      displayName,
      email,
      password,
      confirmPassword
    } = this.state;

    if (password !== confirmPassword) {
      alert("passwords do not match!");
      return;
    }

    try {
      this.setState({isLoading: true});
      const {user} = auth.createUserWithEmailAndPassword(
        email,
        password
      );
      
      await createUserProfileDocument(user, {displayName});

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        isLoading: false
      })
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };


  render () {
    if (this.load) {
      Loading.className = "display-true";
    } else {
      Loading.className = "display-false";
    }
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm password"
            required
          />
          <CustomButton 
            type="submit"
            isGoogleSignIn={false}
          >
            SIGN UP
          </CustomButton>
        </form>
        <Loading isLoading={this.state.isLoading}/>
      </div>
    );
  }
}

export default SignUp;