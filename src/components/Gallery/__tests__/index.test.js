import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'

// mock props
const portrait = { name: "portraits", description: "Portraits of people in my life" };

// after each test this ensures no leftover memory data to give false results
afterEach(cleanup)

// declare component to be tested
describe('Gallery is rendering', () => {
    // baseline test
    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });

    // h1 tag renders as Portraits
    it('renders', () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait} />)
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    })

    // snapshot test
    it('matches snapshot', () => {
        // returns snapshot of Gallery component
        const { asFragment } = render(<Gallery currentCategory={portrait} />)
        // assert value comparison with jest-dom matcher
        expect(asFragment()).toMatchSnapshot()
    })
})