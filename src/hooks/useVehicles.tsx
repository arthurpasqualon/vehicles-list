import {useMemo} from 'react';
import {useAppSelector} from './useReduxHooks';

const useFilterVehicles = () => {
  const filters = useAppSelector(state => state.filterReducer);
  const vehicles = useAppSelector(state => state.vehiclesSlice.vehicles);

  const filteredVehicles = useMemo(
    () =>
      vehicles.filter(vehicle => {
        const makeFilter = filters.make.length
          ? filters.make.includes(vehicle.make)
          : true;
        const modelFilter = filters.model.length
          ? filters.model.includes(vehicle.model)
          : true;
        const priceFilter = filters.startingBid
          ? filters.startingBid.min <= vehicle.startingBid &&
            filters.startingBid.max >= vehicle.startingBid
          : true;
        return makeFilter && modelFilter && priceFilter;
      }),
    [vehicles, filters],
  );

  return filteredVehicles;
};

export default useFilterVehicles;
