import React, { useState } from 'react';
import Checkbox from './formElements/Checkbox';
import RadioButtons from './formElements/RadioButtons';
import T from '../utils/i18n';

/*
const styleOptions = {
  fontSize: (value) => 'number',
  italic: (value) => 'boolean',
  bold: (value) => 'boolean',
  alignment: (value) => 'radioButton',
  margin: (value) => 'multiNumber'
};
*/
const options = ['left', 'right', 'justified', 'center'];

const styleOptions = {
  alignment: (onChange, selectedValue) => (<RadioButtons options={options} onChange={onChange} selectedOption={selectedValue} name={'alignment'} key={'alignment'}/>),
  italic: (onChange, selected) => (<Checkbox selected={selected} onChange={onChange} name={'italic'} key={'italic'} />),
  bold: (onChange, selected) => (<Checkbox selected={selected} onChange={onChange} name={'bold'} key={'bold'} />)
};

const defaultStyles = {
  alignment: 'center',
  italic: false,
  bold: false
};

function StyleEditor(props) {
  const [styles, updateStyles] = useState(defaultStyles);

  const onSubmit = (event) => {
    props.onUpdate(styles);
    event.preventDefault();
  }

  const onChange = updatedStyle => {
    updateStyles({ ...styles, ...updatedStyle });
  };

  return (
    <div className="StyleEditor">
      <header>{T.translate('styleEditor.header')}</header>
      <form onSubmit={onSubmit}>
        {Object.keys(styleOptions).map(key => styleOptions[key](onChange, styles[key]))}
        <input type="submit" value={T.translate('styleEditor.update')} />
      </form>
    </div>
  );
}

export default StyleEditor;
