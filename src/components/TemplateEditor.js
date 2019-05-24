import React, { useState } from 'react';
import TemplatePreview from './TemplatePreview';
import DropDownSelector from './DropDownSelector';
import T from '../utils/i18n';
const defaultTemplate = {
  content: []
}
const options = [
  { value: 'content', label: T.translate('templateEditor.content')},
  { value: 'watermark', label: T.translate('templateEditor.watermark')}
]

const TemplateElementSelector = () => (
  <DropDownSelector
    options={options}
    label={T.translate('templateEditor.featureSelectLabel')}
    defaultValue={options[0].value}
    submitLabel={T.translate('templateEditor.featureSelectSubmit')}
    handleSubmit={() => 'mocked'}
  />
)

function TemplateEditor(props) {
  const [template, updateTemplate] = useState(defaultTemplate);

  return (
    <div className="TemplateEditor">
      <header>{T.translate('templateEditor.header')}</header>
      <TemplateElementSelector/>
      <TemplatePreview template={template}/>
    </div>
  );
}

export default TemplateEditor;
