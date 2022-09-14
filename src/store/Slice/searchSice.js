import {createSlice} from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'search',
    initialState: "",
    reducers: {
        searchFilm(state, action){
          state = action.payload;
        }
    }
})