import React from "react";
import T from "../../../../utils/i18n";
import DropDownSelector from "../../../DropDownSelector";
import TextFeature from "../TextFeature";

const itemDefaults = {
  text: { text: "Update me..." }
};

const options = Object.keys(itemDefaults).map(key => ({
  value: key,
  label: T.translate(`features.${key}`)
}));

const itemEditors = {
  text: (featureObject, i, onUpdateItemFunction) => (
    <TextFeature
      key={i}
      onUpdate={onUpdateItemFunction(i)}
      value={featureObject.text}
    />
  )
};

const OrderedListItemSelector = props => (
  <DropDownSelector
    options={options}
    label={T.translate("features.listSelectLabel")}
    defaultValue={options[0].value}
    submitLabel={T.translate("features.listSelectSubmit")}
    handleSubmit={selectedFeature =>
      props.onSubmit(itemDefaults[selectedFeature])
    }
  />
);

function ListFeature(props) {
  const { items, typeKey } = props;
  const onUpdateItemFunction = i => item => {
    const updatedItems = [...items];
    updatedItems[i] = item;
    props.onUpdate({ [typeKey]: updatedItems });
  };

  return (
    <div className="ListFeature">
      <header>{T.translate(`${typeKey}Feature.header`)}</header>
      <OrderedListItemSelector
        items={items}
        onSubmit={onUpdateItemFunction(items.length)}
      />
      {items.map((featureObject, i) =>
        itemEditors[Object.keys(featureObject)[0]](
          featureObject,
          i,
          onUpdateItemFunction
        )
      )}
    </div>
  );
}

export default ListFeature;
