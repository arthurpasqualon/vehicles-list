import {FilterBy} from '../routes/types';
import vehicles from '../data/vehicles.json';

const getFilterOptions = (option: FilterBy) => {
  if (option === FilterBy.MAKE) {
    return Array.from(new Set(vehicles.map(vehicle => vehicle.make)));
  }

  if (option === FilterBy.MODEL) {
    return Array.from(new Set(vehicles.map(vehicle => vehicle.model)));
  }

  return [];
};

export default getFilterOptions;
