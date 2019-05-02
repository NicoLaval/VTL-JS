import React from 'react';
import { PropTypes } from 'prop-types';
import './text-area.scss';

const Validation = ({ value, handleChange }) => (
  <textarea className="text-area " value={value} onChange={e => handleChange(e.target.value)} />
);

export default Validation;

Validation.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};

Validation.defaultProps = {
  handleChange: console.log,
};
