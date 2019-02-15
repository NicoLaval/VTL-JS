import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './button.scss';

const CustomButton = ({ label, onClick }) => (
  <Button onClick={onClick} size="big" className="main-button">
    {label}
  </Button>
);

export default CustomButton;

CustomButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  label: '',
  onClick: e => e.preventDefault(),
};
