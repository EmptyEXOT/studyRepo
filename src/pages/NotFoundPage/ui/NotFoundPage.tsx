import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const { t } = useTranslation();
    const { className, children } = props;
    return (
        <div className={classNames(classes.notFoundPage, {}, [className])}>
            {t('Страница не найдена!')}
        </div>
    );
};
export default NotFoundPage;
