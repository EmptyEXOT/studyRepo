import { MemoryRouter } from 'react-router-dom';
import React, { ReactNode } from 'react';

export interface RenderWithRouterOptions {
    route?: string;
}

export function renderWithRouter(
    component: ReactNode,
    options: RenderWithRouterOptions = {},
) {
    const { route = '/' } = options;
    return <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>;
}
