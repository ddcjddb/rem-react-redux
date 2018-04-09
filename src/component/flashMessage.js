import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";

class flashMessage extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { type, text } = this.props.message;
    return (
      <div
        className={classnames("alert", {
          "alert-success": type === "success",
          "alert-dager": type === "error"
        })}
      >
        <button onClidk={this.onClick} className="close">
          <span>&times;</span>
        </button>
        {text}
      </div>
    );
  }
}

flashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(flashMessage);
