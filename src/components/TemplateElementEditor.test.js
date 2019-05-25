import React, { useState } from 'react';
import { render, waitForElement, fireEvent, cleanup } from 'react-testing-library';
import TemplateElementEditor from './TemplateElementEditor';
import 'jest-dom/extend-expect';

afterEach(cleanup);

it('renders', async () => {
  const elementName = 'watermark';
  const values = { text: 'great text value' };

  const { getByText } = render(
    <TemplateElementEditor
      elementName={elementName}
      values={values}
    />
  );

  await waitForElement(() => getByText(JSON.stringify(values)));
});

it('selects a value on update', async () => {
  const originalValue = 'This is the original value';
  const valueToBeUpdatedTestId = 'value-to-be-updated';
  const updateLabel = 'Update';
  const elementName = 'content';
  const feature = {"text":"initial feature text"};
  const defaultValue = { [elementName]: [feature]};

  const MockContainerComponent = (props) => {
    const [ value, updateValue] = useState(originalValue)

    return (
        <div>
        <header data-testid={valueToBeUpdatedTestId}>{JSON.stringify(value)}</header>
        <TemplateElementEditor
          elementName={elementName}
          onUpdate={updateValue}
        />
      </div>
    );
  }

  const { getByText, getByTestId } = render(
    <MockContainerComponent/>
  );

  fireEvent.click(getByText(updateLabel));
  const updatedHeader = await waitForElement(() => getByTestId(valueToBeUpdatedTestId));
  expect(updatedHeader).toHaveTextContent(JSON.stringify(defaultValue));
});

