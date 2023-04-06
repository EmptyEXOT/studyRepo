import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { FC, ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';

export function renderWithStore(
    children: ReactNode,
    initialState?: DeepPartial<StateSchema>,
) {
    return (
        <StoreProvider initialState={initialState as StateSchema}>
            {children}
        </StoreProvider>
    );
}
