import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import allVehicles from '../../../data/vehicles.json';
import {IVehiclesState} from './types';
import {Vehicle} from '../../../types';
import _ from 'lodash';

const initialState: IVehiclesState = {
  vehicles: allVehicles,
};
export const vehiclesSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<Vehicle>) => {
      const itemIndex = state.vehicles.findIndex(item =>
        _.isEqual(item, action.payload),
      );
      if (itemIndex === -1) {
        return;
      }
      state.vehicles[itemIndex].favourite =
        !state.vehicles[itemIndex].favourite;
    },
  },
});

export const {toggleFavourite} = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
