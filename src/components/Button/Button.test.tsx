import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {

  it("renders button element", () => {
    const {getByText} = render(<Button />);
    const element = getByText('Button');
    expect(element.tagName).toBe('BUTTON');
  });

  it('has expected default type attribute', () => {
    const {getByText} = render(<Button />);
    const element = getByText('Button');
    expect(element).toHaveAttribute('type', 'button');
  });

  it('has expected type attribute (submit)', () => {
    const {getByText} = render(<Button type='submit'/>);
    const element = getByText('Button');
    expect(element).toHaveAttribute('type', 'submit');
  });

  it('has expected type attribute (reset)', () => {
    const {getByText} = render(<Button type='reset'/>);
    const element = getByText('Button');
    expect(element).toHaveAttribute('type', 'reset');
  });

  it('has expected label when label prop not set', () => {
    const {getByText} = render(<Button />);
    const element = getByText('Button');
    expect(element).toHaveTextContent('Button');
  });

  it('has expected label when label prop set', () => {
    const {getByText} = render(<Button label='Submit'/>);
    const element = getByText('Submit');
    expect(element).toHaveTextContent('Submit');
  });

  it('fires click event', () => {
    const mockClickHandler = jest.fn();
    const {getByText} = render(<Button onClick={mockClickHandler}/>);
    fireEvent.click(getByText('Button'));
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});

describe('Light button', () => {
  it('has the expected classes', () => {
    const {getByText} = render(<Button buttonStyle="light" />);
    const element = getByText('Button');
    expect(element).toHaveClass('button button--light');
  });
});

describe('Dark button', () => {
  it('has the expected classes', () => {
    const {getByText} = render(<Button buttonStyle="dark" />);
    const element = getByText('Button');
    expect(element).toHaveClass('button button--dark');
  });
});