import React from 'react';
import PropTypes from 'prop-types';
import './response.scss';

const Response = ({ response }) => <div className="response">{response}</div>;

export default Response;

Response.propTypes = {
  response: PropTypes.string.isRequired,
};
