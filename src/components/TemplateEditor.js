import React, { useState } from 'react';
import TemplatePreview from './TemplatePreview';
import DropDownSelector from './DropDownSelector';
import T from '../utils/i18n';
const defaultTemplate = {
  content: []
}
const elements = {
  content: [{ text: 'Add more!'}],
  watermark: { text: 'watermark!'},
}

const options = Object.keys(elements).map(key => ({ value: key, label: T.translate(`templateEditor.${key}`)}));

const TemplateElementSelector = (props) => (
  <DropDownSelector
    options={options}
    label={T.translate('templateEditor.featureSelectLabel')}
    defaultValue={options[0].value}
    submitLabel={T.translate('templateEditor.featureSelectSubmit')}
    handleSubmit={(selectedElement) => props.onSubmit({ ...props.template, [selectedElement]: elements[selectedElement] })}
  />
)

function TemplateEditor(props) {
  const [template, updateTemplate] = useState(defaultTemplate);

  return (
    <div className="TemplateEditor">
      <header>{T.translate('templateEditor.header')}</header>
      <TemplateElementSelector template={template} onSubmit={updateTemplate}/>
      <TemplatePreview template={template}/>
    </div>
  );
}

export default TemplateEditor;
