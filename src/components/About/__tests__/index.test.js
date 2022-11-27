import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// after each test this ensures no leftover memory data to give false results
afterEach(cleanup);

// declare component to be tested
describe('About component', () => {
    // First Test
    // renders About test
    it('renders', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // returns snapshot of About component
        const { asFragment } = render(<About />);

        // compare expected and actual outcomes for match. toMatchSnapshot() matcher comes from jest-dom matcher library
        expect(asFragment()).toMatchSnapshot();
    });
})