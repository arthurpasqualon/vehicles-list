import {FilterBy} from '../routes/types';
import {useAppSelector} from './useReduxHooks';

const useGetFilterOptions = (option: FilterBy) => {
  const vehicles = useAppSelector(state => state.vehiclesSlice.vehicles);
  if (option === FilterBy.MAKE) {
    return Array.from(new Set(vehicles.map(vehicle => vehicle.make)));
  }

  if (option === FilterBy.MODEL) {
    // Only show models that are available in the filtered vehicles
    return Array.from(new Set(vehicles.map(vehicle => vehicle.model)));
  }

  return [];
};

export default useGetFilterOptions;
