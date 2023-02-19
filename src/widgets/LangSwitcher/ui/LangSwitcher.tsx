import React, {FC} from 'react'
import classes from './LangSwitcher.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import Button, {ButtonTheme} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const {className, children} = props
    const {t, i18n} = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames(classes.langSwitcher, {}, [className])}
            onClick={toggleLang}
            theme={ButtonTheme.CLEAR}>
            {t('Язык')}
        </Button>
    )
};

export default LangSwitcher;
