import React, { useState } from "react";
const formatOption = (option, index) => (
  <option value={option.value} key={index}>
    {option.label}
  </option>
);

function DropdownSelector(props) {
  const [value, updateValue] = useState(props.defaultValue);

  const onSubmit = event => {
    props.handleSubmit(value);
    event.preventDefault();
  };
  const onChange = event => {
    updateValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        {props.label}
        <select value={value} onChange={onChange}>
          {props.options.map((option, i) => formatOption(option, i))}
        </select>
      </label>
      <input type="submit" value={props.submitLabel} />
    </form>
  );
}

export default DropdownSelector;
