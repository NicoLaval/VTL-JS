import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './button.scss';

const CustomButton = ({ label, onClick, disabled }) => (
  <Button onClick={onClick} disabled={disabled} size="big" className="main-button">
    {label}
  </Button>
);

export default CustomButton;

CustomButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

CustomButton.defaultProps = {
  label: '',
  onClick: e => e.preventDefault(),
  disabled: false,
};
