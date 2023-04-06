import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { initialState, children } = props;
    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
