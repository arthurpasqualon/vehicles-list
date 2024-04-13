import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Vehicle} from '../types';

export enum FilterBy {
  MAKE = 'make',
  MODEL = 'model',
}

export type RootStackParamList = {
  MAIN: any;
  FILTER: {
    filterBy: FilterBy;
  };
  DETAIL: {
    vehicle: Vehicle;
  };
};

export type RootStackScreenProps =
  NativeStackNavigationProp<RootStackParamList>;
