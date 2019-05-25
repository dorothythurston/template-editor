import React from 'react';
import T from '../utils/i18n';
import TemplateElementFeatureEditor from './TemplateElementFeatureEditor';

function TemplateElementEditor(props) {
  const { elementName, values, onUpdate } = props;
  const onUpdateFeature = (feature) => {
    onUpdate({ [elementName]: [feature]});
  }

  return (
    <div className="TemplateElementEditor">
      <header>{T.translate('templateElementEditor.header') + T.translate(`templateEditor.${elementName}`)}</header>
      <p>{JSON.stringify(values)}</p>
      <TemplateElementFeatureEditor onUpdate={onUpdateFeature}/>
    </div>
  );
}

export default TemplateElementEditor;
