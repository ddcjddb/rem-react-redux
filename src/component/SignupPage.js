import React from "react";
import PropTypes from "prop-types";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { userSignupRequest } from "./signupActions";
import { addFlashMessages } from "./flashactioncreater";

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest, addFlashMessages } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm
            userSignupRequest={userSignupRequest}
            addFlashMessages={addFlashMessages}
          />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessages: PropTypes.func.isRequired
};
export default connect(null, { userSignupRequest, addFlashMessages })(
  SignupPage
);
