import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelfReq } from './auth.interface';

interface InitialState {
    selectedRole: null | string;
    self: SelfReq | null;
}

const initialState: InitialState = {
    selectedRole: null,
    self: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSelectedRole: (state, action: PayloadAction<string | null>) => {
            state.selectedRole = action.payload;
        },
        getSelf: (state, action: PayloadAction<SelfReq | null>) => {
            state.self = action.payload;
        },
    }
});

export const { setSelectedRole, getSelf } = authSlice.actions;
export default authSlice.reducer;
