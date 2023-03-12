import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { renderWithTranslation } from './renderWithTranslation';
import { renderWithRouter, RenderWithRouterOptions } from './renderWithRouter';

export function testComponentRender(
    component: ReactNode,
    options: RenderWithRouterOptions = {},
) {
    return render(renderWithTranslation(renderWithRouter(component, options)));
}
