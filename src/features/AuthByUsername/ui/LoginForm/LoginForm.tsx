import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonVariant } from 'shared/ui/Button/Button';
import Input, { InputVariant } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
    const { t } = useTranslation();
    const { className } = props;

    const { username, password, isLoading, error } = useSelector(getLoginState);
    const dispatch = useDispatch();
    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(classes.loginForm, {}, [className])}>
            {error && <Text variant={TextVariant.ALERT} title={error} />}
            <Input
                label={t('Username')}
                variant={InputVariant.OUTLINED}
                className={classes.input}
                type='text'
                autofocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                label={t('Password')}
                variant={InputVariant.OUTLINED}
                className={classes.input}
                type='text'
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={classes.loginBtn}
                variant={ButtonVariant.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Boйти')}
            </Button>
        </div>
    );
});

export default LoginForm;
