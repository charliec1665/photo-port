import React from 'react'
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

// after each test this ensures no leftover memory data to give false results
afterEach(cleanup);

// declare component to be tested
describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact></Contact>)
    })

    // snapshot test
    it('matches snapshot', () => {
        // returns snapshot of Contact component
        const { asFragment } = render(<Contact></Contact>);
        // assert value comparison with jest-dom matcher
        expect(asFragment()).toMatchSnapshot();
    })

    // test that h1 is rendering
    it('renders h1 tag', () => {
        // arrange query to return h1 value
        const { getByTestId } = render(<Contact></Contact>);
        // assert valid matches of element using jest-dom matcher
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
    })

    // test that submit button value is Submit
    it('renders the submit button', () => {
        // arrange query to return button text value
        const { getByTestId } = render(<Contact></Contact>);
        // assert valid matches of element using jest-dom matcher
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    })
})