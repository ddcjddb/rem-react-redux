import React, { Component } from "react";
import timezones from "./timezones";
import map from "lodash/map";
import PropTypes from "prop-types";
import classnames from "classnames";
import TextFieldGroup from "./TextFieldGroup";
import { browserHistory } from "react-router";
// import app from "./express";
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

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });

      this.props.userSignupRequest(this.state).then(
        () => {
          // this.context.app.push('/');
          this.props.addFlashMessages({
            type: "success",
            text: "You signed up successfully. Welcome!"
          });
          browserHistory.push("/");
        },
        //data 返回不回来，怎么破？
        ({ data = {} }) => {
          //   console.log(data);
          this.setState({ errors: data, isLoading: false });
        }
      );
    }
  }

  //   onSubmit(e) {
  //     e.preventDefault();
  //     this.setState({ errors: {}, isLoading: true });
  //     const { errors, isValid } = validateInput(this.state);
  //     //setTimeout 使按钮可以出现短暂disabled
  //     setTimeout(() => {
  //       if (isValid) {
  //         this.props.userSignupRequest(this.state);
  //       } else {
  //         this.setState({ errors, isLoading: false });
  //       }
  //     }, 2000);
  //   }

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
        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          field="username"
        />
        <TextFieldGroup
          error={errors.email}
          label="Email"
          autoComplete="email"
          onChange={this.onChange}
          value={this.state.email}
          field="email"
        />
        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          autoComplete="new-password"
          field="password"
          type="password"
        />
        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="PasswordConfirmation"
          onChange={this.onChange}
          autoComplete="organization"
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />

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
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessages: PropTypes.func.isRequired
};

// SignupForm.contextTypes = {
//   app: PropTypes.object.isRequired
// };

export default SignupForm;
