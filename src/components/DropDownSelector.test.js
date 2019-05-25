import React, { useState } from 'react';
import { render, waitForElement, fireEvent, cleanup } from 'react-testing-library';
import DropDownSelector from './DropDownSelector';
import 'jest-dom/extend-expect';

const options = [
  { value: 'first choice', label: 'First Choice Label ONLY'},
  { value: 'second choice', label: 'Second Choice Label'}
]

const selectLabel = 'Cool Label';
const submitLabel = 'Submit Label';

afterEach(cleanup)

it('renders', async () => {
  const handleSubmit = () => 'mocked';

  const { getByText } = render(
    <DropDownSelector
      options={options}
      label={selectLabel}
      defaultValue={options[0].value}
      submitLabel={submitLabel}
      handleSubmit={handleSubmit}
    />
  );

  await waitForElement(() => getByText(selectLabel));
});

it('selects a value on submit', async () => {
  const originalValue = 'This is the original value';
  const valueToBeUpdatedTestId = 'value-to-be-updated';

  const MockContainerComponent = (props) => {
    const [ value, updateValue] = useState(originalValue)

    return (
        <div>
        <header data-testid={valueToBeUpdatedTestId}>{value}</header>
        <DropDownSelector
          options={options}
          label={selectLabel}
          defaultValue={options[0].value}
          submitLabel={submitLabel}
          handleSubmit={updateValue}
        />
      </div>
    );
  }

  const { getByText, getByTestId } = render(
    <MockContainerComponent/>
  );

  fireEvent.click(getByText(submitLabel));
  const updatedHeader = await waitForElement(() => getByTestId(valueToBeUpdatedTestId));
  expect(updatedHeader).toHaveTextContent(options[0].value);
});
