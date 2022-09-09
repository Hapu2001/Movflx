import { createSlice } from '@reduxjs/toolkit'


export const usersSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers:{
        addBookmark(state,action){       
            const check = state.find(item => item.id === action.payload.id);   
            if(check){
                state = {...state}
            }else{
                state.push(action.payload);
            }
        },
        deleteBookmark(state,action){
          const removeList=  state.filter(item=>item.id !== action.payload)
          state=removeList
        },
    }
})
const { actions, reducer } = usersSlice
export const {addBookmark, deleteBookmark} = actions
export default reducer;
