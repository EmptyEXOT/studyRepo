import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import Input, { InputVariant } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            <BugButton />
            <Input
                variant={InputVariant.CLEAR}
                label='enter text'
                value={value}
                onChange={onChange}
            />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
