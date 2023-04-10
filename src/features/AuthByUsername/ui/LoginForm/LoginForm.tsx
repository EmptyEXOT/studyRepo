import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonVariant } from 'shared/ui/Button/Button';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const { t } = useTranslation();
    const { className, children } = props;
    return (
        <div className={classNames(classes.loginForm, {}, [className])}>
            <input className={classes.input} type='text' />
            <input className={classes.input} type='text' />
            <Button
                className={classes.loginBtn}
                variant={ButtonVariant.OUTLINE}
            >
                {t('Boйти')}
            </Button>
        </div>
    );
};

export default LoginForm;
