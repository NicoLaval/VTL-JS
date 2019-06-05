import React, { useState } from 'react';
import { VtlEditor } from 'react-vtl-editor';
import { Title, Button } from 'components/shared';
import D from 'i18n';
import './monaco.scss';

const Monaco = () => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(true);
  return (
    <>
      <Title label={D.monacoTitle} />
      <div className="monaco-editor">
        <VtlEditor handleValue={setValue} handleValid={setValid} />
      </div>
      <Button
        label={valid ? D.enableBtn : D.disableBtn}
        onClick={() => console.log(value)}
        disabled={!valid}
      />
    </>
  );
};

export default Monaco;
