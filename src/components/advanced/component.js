import React from 'react';
import Title from 'components/shared/title';
import TextAreaHtml from 'components/shared/text-area-html';
import D from 'i18n';

const Advanced = () => (
  <>
    <Title label={D.advancedTitle} />
    <TextAreaHtml forcedValue="" />
  </>
);

export default Advanced;
