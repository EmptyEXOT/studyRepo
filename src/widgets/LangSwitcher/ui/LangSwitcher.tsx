import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonVariant } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short: boolean;
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className, children, short } = props;
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleLang}
            variant={ButtonVariant.CLEAR_INVERTED}
        >
            {t(short ? 'Короткий Язык' : 'Язык')}
        </Button>
    );
};

export default LangSwitcher;
