import React from "react";
import { render, waitForElement } from "react-testing-library";
import RadioButtons from "./RadioButtons";

it("renders", async () => {
  const option1 = "first option";
  const options = [option1];
  const selectedOption = option1;
  const title = "RadioButtons input title";
  const name = "name";
  const { getByText } = render(
    <RadioButtons
      options={options}
      selectedOption={selectedOption}
      onChange={() => "mocked"}
      name={name}
      title={title}
    />
  );

  await waitForElement(() => getByText(title));
  await waitForElement(() => getByText(option1));
});
