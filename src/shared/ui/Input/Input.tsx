import React, { FC, InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const Input: FC<InputProps> = (props) => {
    const { className, value, onChange, type = 'text', ...otherProps } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(classes.input, {}, [className])}>
            <input type={type} value={value} onChange={onChangeHandler} />
        </div>
    );
};

export default Input;
