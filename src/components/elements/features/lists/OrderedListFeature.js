import React from "react";
import ListFeature from "./ListFeature";

function OrderedListFeature(originalProps) {
  const props = { ...originalProps, typeKey: "ol" };
  return <ListFeature {...props} />;
}

export default OrderedListFeature;
