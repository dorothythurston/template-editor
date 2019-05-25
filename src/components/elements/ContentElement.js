import React from "react";
import T from "../../utils/i18n";
import TextFeature from "./features/TextFeature";

function ContentElement(props) {
  const { elementName, values, onUpdate } = props;
  const onUpdateFeature = feature => {
    onUpdate({ [elementName]: [feature] });
  };

  return (
    <div className="ContentElement">
      <header>
        {T.translate("contentElement.header") +
          T.translate(`templateEditor.${elementName}`)}
      </header>
      <p>{JSON.stringify(values)}</p>
      <TextFeature onUpdate={onUpdateFeature} />
    </div>
  );
}

export default ContentElement;
