import Button, { ButtonVariant } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>
                value=
                {counterValue}
            </h1>
            <Button onClick={increment} variant={ButtonVariant.OUTLINE}>
                increment
            </Button>
            <Button onClick={decrement} variant={ButtonVariant.OUTLINE}>
                decrement
            </Button>
        </div>
    );
};

export default Counter;
