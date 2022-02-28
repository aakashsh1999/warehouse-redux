import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    data :0
}

const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        filterByCity : (state, actions) => {
            state.data =  state.data.filter(el => el.city === actions.payload);
        },
        filterByCluster : (state, actions) => {
            state.data =  state.data.filter(el => el.cluster === actions.payload);
        },

        filterByType : (state, actions) => {
            state.data =  state.data.filter(el => el.type === actions.payload);
        },
        printData : (state) =>{
            state.data += 1;
        }

    }
});

export const {filterByCity, filterByCluster, filterByType, printData} = filterSlice.actions;

export const warehoueData = (state) => state.filterSlice.data //passing Data using the 

export default filterSlice.reducer;