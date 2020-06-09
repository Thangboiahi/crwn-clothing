import React from "react";
import {Link} from "react-router-dom";

import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";

import { connect } from "react-redux";

import { auth } from "./../../firebase/firebase.utils";

import {ReactComponent as Logo} from "./../../assets/crown.svg";

import "./header.styles.scss"

const Header = ({currentUser, hidden}) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div> :
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      }

      <CartIcon />
    </div>
    {
      hidden ?
      null :
      <CartDropdown />
    }
  </div>
);

//  called whenever the store state changes
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);
// The return of connect() is a wrapper function that takes your component and returns a wrapper component with the additional props it injects.