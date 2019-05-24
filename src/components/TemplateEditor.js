import React, { useState } from 'react';
import TemplatePreview from './TemplatePreview';
import T from '../utils/i18n';
const defaultTemplate = {
  content: []
}

function TemplateEditor(props) {
  const [template, updateTemplate] = useState(defaultTemplate);

  return (
    <div className="TemplateEditor">
      <header>{T.translate('templateEditor.header')}</header>
      <button onClick={(feature) => updateTemplate(feature)}>
        {T.translate('templateEditor.addElement')}
      </button>
      <TemplatePreview template={template}/>
    </div>
  );
}

export default TemplateEditor;
