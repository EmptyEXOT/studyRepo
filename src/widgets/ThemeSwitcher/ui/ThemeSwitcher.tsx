import React, {FC} from 'react';
import classes from './ThemeSwitcher.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import ThemeSwitcherIcon from "shared/assets/themeSwither.svg"

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {children, className} = props;
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames(classes.themeSwitcher, {}, [className, classes[theme]])}
        >
            <ThemeSwitcherIcon className={classNames(classes.themeSwitcherIcon, {}, [])}/>
        </Button>
    );
};

export default ThemeSwitcher;