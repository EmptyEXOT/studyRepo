import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
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
            <div className={classes.links}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    className={classes.link}
                    to='/'
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    className={classes.link}
                    // eslint-disable-next-line i18next/no-literal-string
                    to='/about'
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
