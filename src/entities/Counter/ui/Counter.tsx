import Button, { ButtonVariant } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid='counter'>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <Button
                data-testid='increment-btn'
                onClick={increment}
                variant={ButtonVariant.OUTLINE}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid='decrement-btn'
                onClick={decrement}
                variant={ButtonVariant.OUTLINE}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};

export default Counter;
