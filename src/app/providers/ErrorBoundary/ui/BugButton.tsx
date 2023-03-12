import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonVariant } from 'shared/ui/Button/Button';

// компонент для тестирования
const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    const throwError = () => {
        setError(true);
    };

    return (
        <Button variant={ButtonVariant.OUTLINE} onClick={throwError}>
            {t('Пробросить ошибку')}
        </Button>
    );
};

export default BugButton;
