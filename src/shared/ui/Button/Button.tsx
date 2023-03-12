import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    L = 'size_l',
    M = 'size_m',
    S = 'size_s',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    className?: string;
    square?: boolean;
    size?: ButtonSize;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        square,
        size = ButtonSize.M,
        variant,
        children,
        ...other
    } = props;

    const mods: Record<string, boolean> = {
        [classes.square]: square,
    };

    return (
        <button
            type='button'
            className={classNames(classes.button, mods, [
                className,
                classes[variant],
                classes[size],
            ])}
            {...other}
        >
            {children}
        </button>
    );
};

export default Button;
