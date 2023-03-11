import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const routeDecorator = (story: () => Story) => (
    <BrowserRouter>{story()}</BrowserRouter>
);
