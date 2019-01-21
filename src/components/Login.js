import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Login = props => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>
      Sign in to manage your store's inventory.
    </p>
    <button
      className="github"
      onClick={() => props.authenticate ('Github')}
    >
      Login With Github <i className="fab fa-github login-icons"></i>
    </button>
    <button
      className="twitter"
      onClick={() => props.authenticate ('Twitter')}
    >
      Login With Twitter <i className="fab fa-twitter login-icons"></i>
    </button>
    <button
      className="facebook"
      onClick={() => props.authenticate ('Facebook')}
    >
      Login With Facebook <i className="fab fa-facebook login-icons"></i>
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
