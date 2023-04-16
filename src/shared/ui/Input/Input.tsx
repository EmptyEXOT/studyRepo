import React, {
    FC,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';

export enum InputVariant {
    CLEAR = 'clear',
    OUTLINED = 'outlined',
}

export enum InputColor {
    TRANSPARENT = 'transparent',
    LIGHT = 'light',
}

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    variant: InputVariant;
    color?: InputColor;
    label?: string | undefined;
    autofocus?: boolean;
}

const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label,
        variant,
        color = InputColor.TRANSPARENT,
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const input = useRef<HTMLInputElement>();
    useEffect(() => {
        if (autofocus) {
            input.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(classes.inputWrapper, {}, [className])}>
            {label && <div className={classes.label}>{`${label}: `}</div>}
            <div>
                <input
                    ref={input}
                    className={classNames(classes.input, {}, [
                        classes[variant],
                        classes[color],
                    ])}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    placeholder={placeholder}
                    {...otherProps}
                />
            </div>
        </div>
    );
});

export default Input;
