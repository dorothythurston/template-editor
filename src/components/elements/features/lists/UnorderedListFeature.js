import React from "react";
import ListFeature from "./ListFeature";

function UnorderedListFeature(originalProps) {
  const props = { ...originalProps, typeKey: "ul" };
  return <ListFeature {...props} />;
}

export default UnorderedListFeature;
