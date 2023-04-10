import { createContext } from 'react';

export enum Theme {
    DARK = 'app_dark_theme',
    LIGHT = 'app_light_theme',
}

export interface IThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
