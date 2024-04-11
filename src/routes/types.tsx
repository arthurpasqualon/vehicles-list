import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum FilterBy {
  MAKE = 'make',
  MODEL = 'model',
}

export type RootStackParamList = {
  MAIN: any;
  FILTER: {
    filterBy: FilterBy;
  };
  DETAIL: any;
};

export type RootStackScreenProps =
  NativeStackNavigationProp<RootStackParamList>;
