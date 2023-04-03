import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'widgets/Modal';
import Button, { ButtonVariant } from 'shared/ui/Button/Button';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <Button
                variant={ButtonVariant.CLEAR_INVERTED}
                className={classes.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                ducimus earum excepturi mollitia perspiciatis quis veniam!
                Doloremque dolores eius, et id maiores neque omnis provident
                quidem recusandae totam vero voluptates!
            </Modal>
        </div>
    );
};

export default Navbar;
