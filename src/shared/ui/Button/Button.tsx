import {ButtonHTMLAttributes, FC} from 'react'
import classes from './Button.module.scss'
import {classNames} from "shared/lib/classNames/classNames";

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: ButtonTheme,
    className?: string
}

const Button:FC<ButtonProps> = (props) => {
    const {className,
        theme,
        children,
        ...other} = props;

    return (
        <button
            className={classNames(classes.button, {}, [className, classes[theme]])}
            {...other}
        >
            {children}
        </button>
    );
};

export default Button;