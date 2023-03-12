import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <div className={classes.links} />
        </div>
    );
};

export default Navbar;
