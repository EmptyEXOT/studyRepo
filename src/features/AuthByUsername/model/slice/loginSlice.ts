import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line max-len
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    error: '',
    isLoading: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: {
        [loginByUsername.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = null;
        },
        [loginByUsername.pending.type]: (state, action) => {
            state.isLoading = true;
        },
        [loginByUsername.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
