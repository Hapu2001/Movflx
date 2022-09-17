import {configureStore} from '@reduxjs/toolkit'
import userReducer from './Slice/UserSlice'
import searchReducer from './Slice/searchSice'

const store = configureStore({
    reducer:{
        bookmark:userReducer,
        search: searchReducer,
    }
})
export default store