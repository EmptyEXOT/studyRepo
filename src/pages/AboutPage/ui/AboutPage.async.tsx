import { lazy } from 'react';
import { Problem } from 'webpack-cli';

export const AboutPageAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./AboutPage')), 500);
}));
