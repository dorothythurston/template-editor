import React from 'react';
import T from '../utils/i18n';

function TemplateElementEditor(props) {
  return (
    <div className="TemplateElementEditor">
      <header>{T.translate('templateElementEditor.header') + T.translate(`templateEditor.${props.elementName}`)}</header>
      <p>{JSON.stringify(props.values)}</p>
    </div>
  );
}

export default TemplateElementEditor;
