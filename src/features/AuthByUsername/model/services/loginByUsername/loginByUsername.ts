import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const res = await axios.post(
                'http://localhost:8000/login',
                authData,
            );

            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(res.data),
            );
            thunkAPI.dispatch(userActions.setAuthData(res.data));
            if (!res) {
                throw new Error('empty');
            }
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);
