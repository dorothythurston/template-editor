import React, { useState } from 'react';
import { render, waitForElement, fireEvent, cleanup } from 'react-testing-library';
import TemplateElementEditor from './TemplateElementEditor';
import 'jest-dom/extend-expect';

const selectLabel = 'Cool Label';
const submitLabel = 'Submit Label';

afterEach(cleanup)

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

