import { createSlice } from '@reduxjs/toolkit'


var list = localStorage.getItem('user') ;
export const usersSlice = createSlice({
    name: 'user',
    initialState: {
        id:'3',
        bookmark: [],
        },
    reducers:{
        addBookmark(state,action){       
            const check = state.bookmark.find(item => item.id === action.payload.id);   
            if(check){
                state = {...state}
            }else{
                state.bookmark.push(action.payload);
            }
        },
        deleteBookmark(state,action){
          const removeList=  state.bookmark.filter(item=>item.id !== action.payload)
          state.bookmark=removeList
        },
    }
})
const { actions, reducer } = usersSlice
export const {addBookmark, deleteBookmark} = actions
export default reducer;
