import React, { Component } from "react";
import timezones from "./timezones";
import map from "lodash/map";
import PropTypes from "prop-types";
import classnames from "classnames";
// import axios from "axios";

import validateInput from "./users";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      timezone: "",
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // onSubmit(e) {
  //   e.preventDefault();

  //   this.props.userSignupRequest(this.state).then(
  //     () => {},
  //     ({ errors }) => {
  //       console.log(errors);
  //       this.setState({ errors });
  //     }
  //   );
  // }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    const { errors, isValid } = validateInput(this.state);
    setTimeout(() => {
      if (isValid) {
        this.props.userSignupRequest(this.state);
      } else {
        this.setState({ errors, isLoading: false });
      }
    }, 2000);
  }

  render() {
    const options = map(timezones, (val, key) => {
      return (
        <option key={key} value={val}>
          {val}
        </option>
      );
    });
    const { errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit} autoComplete="on">
        <h1>Join our community!</h1>
        <div
          className={classnames("form-group", { "has-error": errors.username })}
        >
          <label className="control-label">Username</label>
          <input
            onChange={this.onChange}
            value={this.state.username}
            type="text"
            name="username"
            className="form-control"
          />
          {errors.username && <span>{errors.username}</span>}
        </div>

        <div
          className={classnames("form-group", { "has-error": errors.email })}
        >
          <label className="control-label">Email</label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            type="text"
            name="email"
            autoComplete="email"
            className="form-control"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div
          className={classnames("form-group", { "has-error": errors.password })}
        >
          <label className="control-label">Password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            autoComplete="new-password"
            className="form-control"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div
          className={classnames("form-group", {
            "has-error": errors.passwordConfirmation
          })}
        >
          <label className="control-label">PasswordConfirmation</label>
          <input
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            type="password"
            name="passwordConfirmation"
            autoComplete="new-password"
            className="form-control"
          />
          {errors.passwordConfirmation && (
            <span>{errors.passwordConfirmation}</span>
          )}
        </div>

        <div
          className={classnames("form-group", { "has-error": errors.timezone })}
        >
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
          {errors.timezone && <span>{errors.timezone}</span>}
        </div>

        <div className="form-group">
          <button disabled={isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default SignupForm;
