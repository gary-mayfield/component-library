import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert';

describe('Default Alert', () => {
  it('renders an alert', () => {
    const { getByRole } = render(
      <Alert header="There are some errors" style="error" />
    );
    const element = getByRole('alert');
    expect(element).toBeTruthy();
  });

  it('renders heading prop', () => {
    const { getByText } = render(
      <Alert header="Payment failed" style="error" />
    );
    const element = getByText('Payment failed');
    expect(element).toBeTruthy();
  });

  it('renders an alert with title and description', () => {
    const { getByText } = render(
      <Alert
        header="There are some errors"
        description="Some alert description goes here"
        style="error"
      />
    );
    const title = getByText('There are some errors');
    const description = getByText('Some alert description goes here');

    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });

  it('renders description with hyper links', () => {
    const child = (
      <>
        Disruption on the network please go to
        <a href="http://tfl.gov.uk">for further information</a>
      </>
    );
    const { getByRole } = render(
      <Alert header="There are some errors" style="error">
        {child}
      </Alert>
    );

    const description = getByRole('link');

    expect(description).toBeTruthy();
  });
});
