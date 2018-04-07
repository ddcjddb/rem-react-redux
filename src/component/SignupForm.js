import React, { Component } from "react";
import timezones from "./timezones";
import map from "lodash/map";
import PropTypes from "prop-types";
// import axios from "axios";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      timezone: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render() {
    const options = map(timezones, (val, key) => {
      return (
        <option key={key} value={val}>
          {val}
        </option>
      );
    });
    return (
      <form onSubmit={this.onSubmit} autoComplete="on">
        <h1>Join our community!</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            onChange={this.onChange}
            value={this.state.username}
            type="text"
            name="username"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            type="text"
            name="email"
            autoComplete="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            autoComplete="new-password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">PasswordConfirmation</label>
          <input
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            type="password"
            name="passwordConfirmation"
            autoComplete="new-password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select
            onChange={this.onChange}
            value={this.state.timezone}
            name="timezone"
            className="form-control"
          >
            <option value="" disabled>
              Choose Your Timezone
            </option>
            {options}
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Sign up</button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default SignupForm;
