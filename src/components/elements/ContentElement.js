import React from 'react';
import T from '../../utils/i18n';
import TemplateElementFeatureEditor from './features/TemplateElementFeatureEditor';

function ContentElement(props) {
  const { elementName, values, onUpdate } = props;
  const onUpdateFeature = (feature) => {
    onUpdate({ [elementName]: [feature]});
  }

  return (
    <div className="ContentElement">
      <header>{T.translate('contentElement.header') + T.translate(`templateEditor.${elementName}`)}</header>
      <p>{JSON.stringify(values)}</p>
      <TemplateElementFeatureEditor onUpdate={onUpdateFeature}/>
    </div>
  );
}

export default ContentElement;
