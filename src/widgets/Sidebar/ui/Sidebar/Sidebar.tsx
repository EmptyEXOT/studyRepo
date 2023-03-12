import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/aboutIcon.svg';
import MainIcon from 'shared/assets/mainIcon.svg';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const { className, children } = props;

    const collapse = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            data-testid='sidebar'
            className={classNames(
                classes.sidebar,
                { [classes.collapsed]: collapsed },
                [className],
            )}
        >
            <div className={classes.items}>
                <div>
                    <AppLink
                        theme={AppLinkVariant.PRIMARY}
                        className={classes.item}
                        to={RoutePaths.main}
                    >
                        <MainIcon className={classes.icon} />
                        <span className={classes.link}>{t('Главная')}</span>
                    </AppLink>
                </div>
                <div>
                    <AppLink
                        theme={AppLinkVariant.PRIMARY}
                        className={classes.item}
                        to={RoutePaths.about}
                    >
                        <AboutIcon className={classes.icon} />
                        <span className={classes.link}>{t('О сайте')}</span>
                    </AppLink>
                </div>
            </div>
            <Button
                variant={ButtonVariant.BACKGROUND_INVERTED}
                data-testid='sidebarToggle'
                onClick={collapse}
                className={classes.collapseBtn}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={classes.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
