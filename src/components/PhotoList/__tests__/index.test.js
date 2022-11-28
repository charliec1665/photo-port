import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../'

// after each test this ensures no leftover memory data to give false results
afterEach(cleanup);

// declare component to be tested
describe('PhotoList is rendering', () => {
    // baseline test
    it('renders', () => {
        render(<PhotoList />);
    });

    // snapshot test
    it('renders', () => {
        // returns snapshot of PhotoList component
        const { asFragment } = render(<PhotoList />)
        // assert value comparison with jest-dom matcher
        expect(asFragment()).toMatchSnapshot()
    })
})