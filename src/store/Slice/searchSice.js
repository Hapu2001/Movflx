import {createSlice} from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'search',
    initialState: "",
    reducers: {
        searchFilm(state, action){
          return state = action.payload;
        }
    }
})
const {actions, reducer} = searchSlice;
export const {searchFilm} = actions
export default reducer;