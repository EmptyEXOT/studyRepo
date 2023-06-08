import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './Text.module.scss';

export enum TextVariant {
    LIGHT = 'light',
    DARK = 'dark',
    ALERT = 'alert',
}

interface TextProps {
    className?: string;
    title?: string;
    paragraph?: string;
    variant?: TextVariant;
}

export const Text: FC<TextProps> = (props) => {
    const { t } = useTranslation();
    const {
        className,
        children,
        title,
        paragraph,
        variant = TextVariant.ALERT,
    } = props;
    return (
        <div
            className={classNames(classes.text, {}, [
                className,
                classes[variant],
            ])}
        >
            {title && <h1 className={classes.title}>{title}</h1>}
            {paragraph && <p className={classes.paragraph}>{paragraph}</p>}
        </div>
    );
};
