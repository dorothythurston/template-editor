import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import StyleEditor from './StyleEditor';

it('renders', async () => {
  const { getByText } = render(<StyleEditor />);

  await waitForElement(() => getByText('Styles'));
});
