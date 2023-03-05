import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import classes from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError: FC<PageErrorProps> = (props) => {
    const { t } = useTranslation();
    const { className, children } = props;

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(classes.pageError, {}, [className])}>
            <p>{t('Произошла ошибка')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};

export default PageError;
