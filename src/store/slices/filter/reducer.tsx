import {createSlice} from '@reduxjs/toolkit';

import {IFilterState} from './types';
import {MAXIMUM_VALUE, MINIMUM_VALUE} from '../../../constants';

const initialState: IFilterState = {
  make: '',
  model: '',
  startingBid: {min: MINIMUM_VALUE, max: MAXIMUM_VALUE},
  favourite: false,
};
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setMakeFilter: (state, action) => {
      state.make = action.payload;
    },
    setModelFilter: (state, action) => {
      state.model = action.payload;
    },
    setStartingBidFilter: (state, action) => {
      state.startingBid = action.payload;
    },
    setFavouriteFilter: (state, action) => {
      state.favourite = action.payload;
    },
    clearAllFilters: state => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = initialState;
    },
  },
});

export const {
  setMakeFilter,
  setModelFilter,
  setStartingBidFilter,
  setFavouriteFilter,
  clearAllFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
