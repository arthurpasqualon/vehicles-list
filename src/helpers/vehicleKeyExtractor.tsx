import {Vehicle} from '../types';

export default function vehicleKeyExtractor(item: Vehicle) {
  return `${item.make}-${item.model}-${item.mileage}-${item.year}`;
}
