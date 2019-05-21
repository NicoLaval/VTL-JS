import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from 'components/shared/sub-title';
import Response from 'components/shared/response';
import D from 'i18n';

const Error = ({ errors }) => (
  <>
    <Subtitle label={`${D.errorTitle}${errors.length > 1 ? 's' : ''}`} />
    {errors.map((e, i) => (
      <Response key={`error-${i}`} response={e} />
    ))}
  </>
);

export default Error;

Error.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
