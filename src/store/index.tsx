import {configureStore} from '@reduxjs/toolkit';

import filterReducer from './slices/filter/reducer';
import vehiclesSlice from './slices/vehicles';
const store = configureStore({
  reducer: {
    filterReducer,
    vehiclesSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
