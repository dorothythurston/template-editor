import React from "react";
import T from "../utils/i18n";

function TemplatePreview(props) {
  return (
    <div className="TemplateEditor">
      <header>{T.translate("templateEditor.templatePreview")}</header>
      <p>{JSON.stringify(props.template)}</p>
    </div>
  );
}

export default TemplatePreview;
