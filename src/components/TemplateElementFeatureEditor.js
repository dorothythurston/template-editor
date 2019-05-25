import React, { useState } from 'react';
import T from '../utils/i18n';

function TemplateElementFeatureEditor(props) {
  const [feature, updateFeature] = useState({ text: 'initial feature text'});

  const onSubmit = (event) => {
    props.onUpdate(feature);
    event.preventDefault();
  }
  const onChange = event => {
    updateFeature({ text: event.target.value})
  }

  return (
    <div className="TemplateElementFeatureEditor">
      <header>{T.translate('templateElementFeatureEditor.header')}</header>
      <form onSubmit={onSubmit}>
        <label>
          {T.translate('templateElementFeatureEditor.label')}
          <input type="text" name="text" onChange={onChange}/>
        </label>
        <input type="submit" value={T.translate('templateElementFeatureEditor.update')} />
      </form>
    </div>
  );
}

export default TemplateElementFeatureEditor;
