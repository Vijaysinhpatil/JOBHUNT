import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../redux/authslice.js'
const store = configureStore({

    reducer : {
        // passing slices
        auth : authSlice,
    }
})
export default store;