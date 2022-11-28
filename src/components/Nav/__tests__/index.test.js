import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// mock props
const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

// after each test this ensures no leftover memory data to give false results
afterEach(cleanup);

// declare component to be tested
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    });
        
     // snapshot test
    it('matches snapshot', () => {
        // returns snapshot of Nav component
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        // assert value comparison with jest-dom matcher
        expect(asFragment()).toMatchSnapshot();
     })
})
        
// declare component to be tested
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // arrange return of emoji by querying the aria-label text
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        // assert element with label 'camera' to have certain content using jest-dom matcher
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})
            
// declare component to be tested
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange query to return link elements
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        // assert valid matches of elements using jest-dom matcher
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})