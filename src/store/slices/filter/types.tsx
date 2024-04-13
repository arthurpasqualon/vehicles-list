export interface IFilterState {
  make: string[];
  model: string[];
  startingBid: {min: number; max: number};
  favourite: boolean;
}
