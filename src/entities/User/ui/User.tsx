import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './User.module.scss';

interface UserProps {
    className?: string
}

const User: FC<UserProps> = (props) => {
    const { t } = useTranslation();
    const { className, children } = props;
    return (
        <div className={classNames(classes.user, {}, [className])} />
    );
};

export default User;
