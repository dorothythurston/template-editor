import React from "react";
import { render, waitForElement } from "react-testing-library";
import TemplateEditor from "./TemplateEditor";

it("renders", async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = render(<TemplateEditor />);

  await waitForElement(() => getByText("Template Editor"));
});
