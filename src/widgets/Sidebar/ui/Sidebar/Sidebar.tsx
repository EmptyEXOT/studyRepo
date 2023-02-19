import React, {FC, useState} from 'react'
import classes from './Sidebar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string
}

const Sidebar:FC<SidebarProps> = (props) => {
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const {className, children} = props

    const collapse = () => {
        setCollapsed(prevState => !prevState);
    }

    return (
        <div className={classNames(classes.sidebar, {[classes.collapsed]: collapsed}, [className])}>
            <Button onClick={collapse}>
                {collapsed ?
                    t("расскрыть") :
                    t("скрыть")
                }
            </Button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={classes.lang}/>
            </div>
        </div>
    );
};

export default Sidebar;