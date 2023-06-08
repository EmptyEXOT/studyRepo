import { StateSchema } from 'app/providers/StoreProvider';
import { UserSchema } from 'entities/User';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
