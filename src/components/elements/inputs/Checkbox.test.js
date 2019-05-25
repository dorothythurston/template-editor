import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import Checkbox from './Checkbox';

it('renders', async () => {
  const name = 'alignment'
  const { getByText } = render(
    <Checkbox name={name} selected={false} value={false} onChange={() => 'mocked'}/>
  );

  await waitForElement(() => getByText(name));
});
