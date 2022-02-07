import React from 'react';
import { render } from '@testing-library/react';
import Tile from './Tile';

describe('Tile', () => {
    it('renders tile element', () => {
        const { getByText } = render(<Tile header="Header" />);
        const element = getByText('Header');
        expect(element.tagName).toBe('SPAN');
    });
    it('has expected classes', () => {
        const { getByText } = render(
            <Tile header="Header" tileStyle="dark" />
        );
        const element = getByText('Header');
        expect(element).toHaveClass('tile--header');
    });

    it('renders heading prop', () => {
        const { getByText } = render(<Tile header="Pay to drive" />);
        const element = getByText('Pay to drive');
        expect(element).toBeTruthy();
    });

    it('renders a tile with header and description', () => {
        const { getByText } = render(
            <Tile header="I am a header" description="I am a description" />
        );
        const header = getByText('I am a header');
        const description = getByText('I am a description');

        expect(header).toBeTruthy();
        expect(description).toBeTruthy();
    });
});
