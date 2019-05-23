import React from 'react';
import { Title, TextAreaHtml } from 'components/shared';
import D from 'i18n';

const Advanced = () => (
  <>
    <Title label={D.draftTitle} />
    <TextAreaHtml forcedValue="" />
  </>
);

export default Advanced;
