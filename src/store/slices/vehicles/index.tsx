import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import allVehicles from '../../../data/vehicles.json';
import {IVehiclesState} from './types';

const initialState: IVehiclesState = {
  vehicles: allVehicles,
};
export const vehiclesSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<number>) => {
      state.vehicles[action.payload].favourite =
        !state.vehicles[action.payload].favourite;
    },
  },
});

export const {toggleFavourite} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
