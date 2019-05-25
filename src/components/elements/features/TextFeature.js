import React, { useState } from 'react';
import T from '../../../utils/i18n';

function TextFeature(props) {
  const [feature, updateFeature] = useState({ text: 'initial feature text'});

  const onSubmit = (event) => {
    props.onUpdate(feature);
    event.preventDefault();
  }
  const onChange = event => {
    updateFeature({ text: event.target.value})
  }

  return (
    <div className="textFeature">
      <header>{T.translate('textFeature.header')}</header>
      <form onSubmit={onSubmit}>
        <label>
          {T.translate('textFeature.label')}
          <input type="text" name="text" onChange={onChange}/>
        </label>
        <input type="submit" value={T.translate('textFeature.update')} />
      </form>
    </div>
  );
}

export default TextFeature;
