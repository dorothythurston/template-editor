import React from 'react';

const CheckBox = (props) => {
  return(
    <div className="checkbox">
      <label>
        <input
          className="form-checkbox"
          id = {props.name}
          name={props.name}
          onChange={(e) => {
            e.preventDefault();
            props.onChange({ [props.name]: !props.selected})
          }}
          value={props.selected}
          checked={props.selected}
          type="checkbox"/> {props.name}
      </label>
    </div>
  );
};

export default CheckBox;