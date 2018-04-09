import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextFieldGroup = ({
  autoComplete,
  field,
  value,
  label,
  error,
  type,
  onChange
}) => {
  return (
    <div
      className={classnames("form-group has-error", {
        "has-error": error
      })}
    >
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        autoComplete={autoComplete}
        name={field}
        className="form-control"
      />
      {!!error && <span>{error}</span>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
