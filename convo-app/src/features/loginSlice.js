import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        setUser: (state, action)=>{
            state.value = action.payload
        }
    }
})

export const {setUser} = loginSlice.actions;
export default loginSlice.reducer