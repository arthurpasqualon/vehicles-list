import {createSlice} from '@reduxjs/toolkit';

import {IFilterState} from './types';
import {MAXIMUM_VALUE, MINIMUM_VALUE} from '../../../constants';

const initialState: IFilterState = {
  make: [],
  model: [],
  startingBid: {min: MINIMUM_VALUE, max: MAXIMUM_VALUE},
  favourite: false,
};
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setMakeFilter: (state, action) => {
      if (state.make.includes(action.payload)) {
        state.make = state.make.filter(make => make !== action.payload);
        return;
      }
      state.make = [...state.make, action.payload];
    },
    clearMakeFilter: state => {
      state.make = [];
    },
    setModelFilter: (state, action) => {
      if (state.model.includes(action.payload)) {
        state.model = state.model.filter(model => model !== action.payload);
        return;
      }
      state.model = [...state.model, action.payload];
    },
    clearModelFilter: state => {
      state.model = [];
    },
    setStartingBidFilter: (state, action) => {
      state.startingBid = action.payload;
    },
    setFavouriteFilter: (state, action) => {
      if (state.favourite === action.payload) {
        state.favourite = false;
        return;
      }
      state.favourite = action.payload;
    },
    clearAllFilters: state => {
      state.make = [];
      state.model = [];
      state.startingBid = {min: MINIMUM_VALUE, max: MAXIMUM_VALUE};
      state.favourite = false;
    },
  },
});

export const {
  setMakeFilter,
  setModelFilter,
  setStartingBidFilter,
  setFavouriteFilter,
  clearMakeFilter,
  clearModelFilter,
  clearAllFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
