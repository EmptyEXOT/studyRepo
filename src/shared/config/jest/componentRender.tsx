import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { renderWithStore } from 'shared/config/jest/renderWithStore';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { renderWithTranslation } from './renderWithTranslation';
import { renderWithRouter, RenderWithRouterOptions } from './renderWithRouter';

export interface ComponentRenderOptions {
    initialState?: DeepPartial<StateSchema>;
    router?: RenderWithRouterOptions;
}

export function testComponentRender(
    component: ReactNode,
    options: ComponentRenderOptions = {},
) {
    return render(
        renderWithStore(
            renderWithTranslation(renderWithRouter(component, options.router)),
            options.initialState,
        ),
    );
}
