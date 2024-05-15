import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"authentication",
    initialState:{
        token:"",
        user:{},
        new:null,
        isFetching:false
    },
    reducers:{
        login(state,action){
            state.token=action.payload?.data?.token;
            state.user=action?.payload?.data;
        },
        setIsFetching(state,action){
            state.isFetching=action.payload;
        },
        setNew(state,action){
            state.new=action.payload;
        }
    }
})
export const authAction=authSlice.actions;

export default authSlice.reducer;