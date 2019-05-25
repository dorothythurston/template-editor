import React from "react";
import { render, waitForElement } from "react-testing-library";
import StylesElement from "./StylesElement";

it("renders", async () => {
  const { getByText } = render(<StylesElement />);

  await waitForElement(() => getByText("Styles"));
});
