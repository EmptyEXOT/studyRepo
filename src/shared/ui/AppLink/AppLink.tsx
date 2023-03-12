import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import classes from './AppLink.module.scss';

export enum AppLinkVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkVariant;
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkVariant.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(classes.appLink, {}, [
                className,
                classes[theme],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
