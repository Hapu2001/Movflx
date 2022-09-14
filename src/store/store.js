import {configureStore} from '@reduxjs/toolkit'
import userReducer from './Slice/UserSlice'

const store = configureStore({
    reducer:{
        bookmark:userReducer
    }
})
export default store