import React, {FC} from 'react';
import classes from './Navbar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

const Navbar:FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} className={classes.link} to={'/'}>Main</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} className={classes.link} to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};

export default Navbar;