import {createSlice} from '@reduxjs/toolkit';
import allVehicles from '../../../data/vehicles.json';
import {IVehiclesState} from './types';
import {
  clearAllFilters,
  setFavouriteFilter,
  setMakeFilter,
  setModelFilter,
  setStartingBidFilter,
} from '../filter/reducer';

const initialState: IVehiclesState = {
  vehicles: allVehicles,
};
export const vehiclesSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setMakeFilter, (state, action) => {
        state.vehicles = allVehicles.filter(
          vehicle => vehicle.make === action.payload,
        );
      })
      .addCase(setModelFilter, (state, action) => {
        state.vehicles = allVehicles.filter(
          vehicle => vehicle.model === action.payload,
        );
      })
      .addCase(setStartingBidFilter, (state, action) => {
        const filtered = allVehicles.filter(
          vehicle =>
            vehicle.startingBid >= action.payload.min &&
            vehicle.startingBid <= action.payload.max,
        );
        state.vehicles = filtered;
      })
      .addCase(setFavouriteFilter, (state, action) => {
        state.vehicles = allVehicles.filter(
          vehicle => vehicle.favourite === action.payload,
        );
      })
      .addCase(clearAllFilters, state => {
        state.vehicles = allVehicles;
      });
  },
});

export default vehiclesSlice.reducer;
