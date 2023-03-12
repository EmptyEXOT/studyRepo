import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
// eslint-disable-next-line max-len
import { testComponentRender } from 'shared/config/jest/componentRender';

describe('Sidebar', () => {
    test('Sidebar render', () => {
        testComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        testComponentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebarToggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
