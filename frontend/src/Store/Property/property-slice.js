import {createSlice} from "@reduxjs/toolkit";


const propertySlice = createSlice({
    //slice name
    name : "property",
    //initial starte for property slice
    initialState : {
        properties : [], 
        totalProperties : 0,
        searchParams : {},  //parameters used to search
        error : null, //error state
        loading : false, //loading state
    },

    //reducers to handle different actions
    reducers:{
        getRequest(state){
            state.loading = true;
        },
    
        //actions to update properties state with fetch data
        getProperties(state, action){
            state.properties = action.payload.data;
            state.totalProperties = action.payload.all_properties;
            state.loading = false;
        },

        //action to  search parameter
        updateSearchParams : (state, action)=> {
            state.searchParams = Object.keys(action.payload).length === 0 ? {} : {
                ...state.searchParams,
                ...action.payload,
            };
        },

        //action to update error state
        getErrors(state, action){
            state.error=action.payload;
        },
    },
});

export const propertyAction = propertySlice.actions;

export default propertySlice;