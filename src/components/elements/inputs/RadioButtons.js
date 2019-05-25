import React from 'react';

const RadioButtons = (props) => {
  return(
    <div>
      <label htmlFor={props.name} className="form-label">{props.title}</label>
      <div className="radio-button-group">
        {props.options.map(option => {
          return (
            <label key={option}>
              <input
                className="form-radio-button"
                id = {props.name}
                name={props.name}
                onChange={(e) => {
                  e.preventDefault();
                  props.onChange({ [props.name]: e.target.value})
                }}
                value={option}
                checked={props.selectedOption === option}
                type="radio"/> {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioButtons;