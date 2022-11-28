import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

// mock toggleModal function
const mockToggleModal = jest.fn();

// mock props
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Loren ipsum dolor sit amet blah blah blah',
    index: 1
};

// after each test this ensures no leftover memory data to give false results
afterEach(cleanup);

// declare component to be tested
describe('Modal component', () => {
    // baseline test
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
    })

    // snapshot test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal
          onClose={mockToggleModal}
          currentPhoto={currentPhoto}
        />);
    
        expect(asFragment()).toMatchSnapshot();
      });
})

// testing the click event
describe('Click Event', () => {
    // baseline test
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal 
            currentPhoto={currentPhoto} 
            onClose={mockToggleModal}
            />)
        fireEvent.click(getByText('Close this modal'));

        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})