import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FlashMessage from "./flashMessage";
import deleteFlashMessage from "./deleteFlashMessage";

class FlashMessageList extends React.Component {
  render() {
    const messages = this.props.messages.map(message => (
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessage={deleteFlashMessage}
      />
    ));
    return <div>{messages}</div>;
  }
}

FlashMessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  };
}

export default connect(mapStateToProps, deleteFlashMessage)(FlashMessageList);
