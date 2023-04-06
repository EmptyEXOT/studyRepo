import { fireEvent, render, screen } from '@testing-library/react';
// eslint-disable-next-line max-len
import { testComponentRender } from 'shared/config/jest/componentRender';
import Counter from './Counter';

describe('Counter', () => {
    beforeEach(() => {
        testComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
    });
    test('Counter render', () => {
        expect(screen.getByTestId('counter')).toBeInTheDocument();
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', () => {
        const incrementBtn = screen.getByTestId('increment-btn');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement', () => {
        const incrementBtn = screen.getByTestId('decrement-btn');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
