import React, { useState } from "react";
import T from "../../../utils/i18n";

function TextFeature(props) {
  const { value } = props;
  const [text, updateFeature] = useState(value || "initial feature text");

  const onSubmit = event => {
    props.onUpdate({ text });
    event.preventDefault();
  };
  const onChange = event => {
    updateFeature(event.target.value);
  };

  return (
    <div className="textFeature">
      <header>{T.translate("textFeature.header")}</header>
      <form onSubmit={onSubmit}>
        <label>
          {T.translate("textFeature.label")}
          <input type="text" name="text" onChange={onChange} value={text} />
        </label>
        <input type="submit" value={T.translate("textFeature.update")} />
      </form>
    </div>
  );
}

export default TextFeature;
