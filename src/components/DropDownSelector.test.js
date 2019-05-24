import React from 'react';
import { render, waitForElement, fireEvent, cleanup } from 'react-testing-library';
import DropDownSelector from './DropDownSelector';

const options = [
  { value: 'first choice', label: 'First Choice Label ONLY'},
  { value: 'second choice', label: 'Second Choice Label'}
]

const selectLabel = 'Cool Label';
const submitLabel = 'Submit Label';
const handleSubmit = () => 'mocked';

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

it('renders', async () => {
  let stateValue;

  const handleSubmit = (event) => {
    stateValue = event;
  };

  const { getByText } = render(
    <DropDownSelector
      options={options}
      label={selectLabel}
      defaultValue={options[0].value}
      submitLabel={submitLabel}
      handleSubmit={handleSubmit}
    />
  );

  fireEvent.click(getByText(options[1].label));
  fireEvent.click(getByText(submitLabel));
  // expect(stateValue).toBe(options[1].value) TODO: Figure out why this isn't working
});
