import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({

    // slice naming

    name : "auth",
    
    initialState : {
        loading : false,
        user : false
    },
    reducers : {
        // actions

        setLoading : ( state , action ) => {
    
              state.loading = action.payload;
              state.user = action.payload;

        }
    }
});

export const { setLoading } = authSlice.actions;
export const {setUser} = authSlice.actions
export default authSlice.reducer;