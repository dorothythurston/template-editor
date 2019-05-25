import React, { useState } from "react";
import {
  render,
  waitForElement,
  fireEvent,
  cleanup
} from "react-testing-library";
import TextFeature from "./TextFeature";
import "jest-dom/extend-expect";

afterEach(cleanup);

it("renders", async () => {
  const onUpdate = () => "mocked";
  const updateLabel = "Update";

  const { getByText } = render(<TextFeature onUpdate={onUpdate} />);

  await waitForElement(() => getByText(updateLabel));
});

it("selects a value on submit", async () => {
  const originalValue = "This is the original value";
  const valueToBeUpdatedTestId = "value-to-be-updated";
  const updateLabel = "Update";
  const defaultValue = { text: "initial feature text" };

  const MockContainerComponent = props => {
    const [value, updateValue] = useState(originalValue);

    return (
      <div>
        <header data-testid={valueToBeUpdatedTestId}>
          {JSON.stringify(value)}
        </header>
        <TextFeature onUpdate={updateValue} />
      </div>
    );
  };

  const { getByText, getByTestId } = render(<MockContainerComponent />);

  fireEvent.click(getByText(updateLabel));
  const updatedHeader = await waitForElement(() =>
    getByTestId(valueToBeUpdatedTestId)
  );
  expect(updatedHeader).toHaveTextContent(JSON.stringify(defaultValue));
});
