import React from 'react';
import PropTypes from 'prop-types';

const SubTitle = ({ label }) => <div className="sub-title">{label}</div>;

export default SubTitle;

SubTitle.propTypes = {
  label: PropTypes.string.isRequired,
};
