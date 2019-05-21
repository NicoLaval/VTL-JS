import React from 'react';
import { PropTypes } from 'prop-types';
import './text-area.scss';

const Validation = ({ value, handleChange, hasError }) => (
  <textarea
    className={`text-area ${hasError ? 'error' : ''}`}
    value={value}
    onChange={e => handleChange(e.target.value)}
  />
);

export default Validation;

Validation.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  hasError: PropTypes.bool,
};

Validation.defaultProps = {
  handleChange: console.log,
  hasError: false,
};
