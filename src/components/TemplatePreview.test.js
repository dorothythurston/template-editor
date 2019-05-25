import React from "react";
import { render, waitForElement } from "react-testing-library";
import TemplatePreview from "./TemplatePreview";

it("stringifies a json template", async () => {
  const template = {
    content: []
  };
  const { getByText } = render(<TemplatePreview template={template} />);

  await waitForElement(() => getByText(JSON.stringify(template)));
});
