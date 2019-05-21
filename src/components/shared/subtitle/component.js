import React from 'react';
import PropTypes from 'prop-types';
import './subtitle.scss';

const Subtitle = ({ label }) => <div className="subtitle">{label}</div>;

export default Subtitle;

Subtitle.propTypes = {
  label: PropTypes.string.isRequired,
};
