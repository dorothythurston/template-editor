import React from "react";
import T from "../../utils/i18n";
import TextFeature from "./features/TextFeature";
import OrderedListFeature from "./features/lists/OrderedListFeature";
import UnorderedListFeature from "./features/lists/UnorderedListFeature";
import TableFeature from "./features/TableFeature";
import DropDownSelector from "../DropDownSelector";

const featureEditors = {
  text: (featureObject, i, onUpdateFeatureFunction) => (
    <TextFeature
      key={i}
      onUpdate={onUpdateFeatureFunction(i)}
      value={featureObject.text}
    />
  ),
  ol: (featureObject, i, onUpdateFeatureFunction) => (
    <OrderedListFeature
      key={i}
      onUpdate={onUpdateFeatureFunction(i)}
      items={featureObject.ol}
    />
  ),
  ul: (featureObject, i, onUpdateFeatureFunction) => (
    <UnorderedListFeature
      key={i}
      onUpdate={onUpdateFeatureFunction(i)}
      items={featureObject.ul}
    />
  ),
  table: (featureObject, i, onUpdateFeatureFunction) => (
    <TableFeature
      key={i}
      onUpdate={onUpdateFeatureFunction(i)}
      value={featureObject.table}
    />
  )
};

const featureDefaults = {
  text: { text: "Update me..." },
  ol: { ol: [{ text: "Update me..." }] },
  ul: { ul: [{ text: "Update me..." }] },
  table: {
    table: {
      body: [["Header"], ["First Value"]]
    }
  }
};

const options = Object.keys(featureDefaults).map(key => ({
  value: key,
  label: T.translate(`features.${key}`)
}));

const ContentFeatureSelector = props => (
  <DropDownSelector
    options={options}
    label={T.translate("features.featureSelectLabel")}
    defaultValue={options[0].value}
    submitLabel={T.translate("features.featureSelectSubmit")}
    handleSubmit={selectedFeature =>
      props.onSubmit(featureDefaults[selectedFeature])
    }
  />
);

function ContentElement(props) {
  const { elementName, features, onUpdate } = props;

  const onUpdateFeatureFunction = i => feature => {
    const updatedElement = [...features];
    updatedElement[i] = feature;
    onUpdate({ [elementName]: updatedElement });
  };

  return (
    <div className="ContentElement">
      <header>
        {T.translate("contentElement.header") +
          T.translate(`templateEditor.${elementName}`)}
      </header>
      <ContentFeatureSelector
        features={features}
        onSubmit={onUpdateFeatureFunction(features.length)}
      />
      <p>{JSON.stringify(features)}</p>
      {features.map((featureObject, i) =>
        featureEditors[Object.keys(featureObject)[0]](
          featureObject,
          i,
          onUpdateFeatureFunction
        )
      )}
    </div>
  );
}

export default ContentElement;
