import React, { useState } from "react";
import TemplatePreview from "./TemplatePreview";
import ContentElement from "./elements/ContentElement";
import DropDownSelector from "./DropDownSelector";
import StylesElement from "./elements/StylesElement";
import T from "../utils/i18n";
const defaultTemplate = {
  content: []
};

const elementEditors = {
  content: (element, i, onUpdateElement, features) => (
    <ContentElement
      key={i}
      elementName={element}
      features={features}
      onUpdate={onUpdateElement()}
    />
  ),
  styles: (element, i) => <StylesElement key={i} />
};

const elementDefaults = {
  content: [],
  styles: {}
};

const options = Object.keys(elementDefaults).map(key => ({
  value: key,
  label: T.translate(`templateEditor.${key}`)
}));

const TemplateElementSelector = props => (
  <DropDownSelector
    options={options}
    label={T.translate("templateEditor.elementSelectLabel")}
    defaultValue={options[0].value}
    submitLabel={T.translate("templateEditor.elementSelectSubmit")}
    handleSubmit={selectedElement =>
      props.onSubmit({
        ...props.template,
        [selectedElement]: elementDefaults[selectedElement]
      })
    }
  />
);

function TemplateEditor(props) {
  const [template, updateTemplate] = useState(defaultTemplate);

  const onUpdateElement = () => updatedElement => {
    updateTemplate({ ...props.template, ...updatedElement });
  };

  return (
    <div className="Container">
      <div className="TemplateEditor">
        <header>{T.translate("templateEditor.header")}</header>
        <TemplateElementSelector
          template={template}
          onSubmit={updateTemplate}
        />
        {Object.keys(template).map((element, i) =>
          elementEditors[element](
            element,
            i,
            onUpdateElement,
            template[element]
          )
        )}
      </div>
      <TemplatePreview template={template} />
    </div>
  );
}

export default TemplateEditor;
