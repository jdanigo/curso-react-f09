import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        token: null,
        isAuth: false,
        email: null
    },
    reducers: {
        setLoginAction: (state, action) => {
            return{
                ...state,
                isAuth: true,
                email: action.payload.email,
                password: action.payload.password
            }
        }
    }
})

export const {setLoginAction} = authSlice.actions;
export default authSlice.reducer;