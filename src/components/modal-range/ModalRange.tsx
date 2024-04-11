import React, {useCallback} from 'react';
import {View, Modal} from 'react-native';

import styles from './styles';
import Button from '../button/Button';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {setStartingBidFilter} from '../../store/slices/filter/reducer';
import {Slider} from '@miblanchard/react-native-slider';
import {MAXIMUM_VALUE, MINIMUM_VALUE} from '../../constants';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const ModalRange: React.FC<ModalProps> = ({open, onClose}) => {
  const dispatch = useAppDispatch();
  const range = useAppSelector(state => state.filterReducer.startingBid);
  const [low, setLow] = React.useState(range.min);
  const [high, setHigh] = React.useState(range.max);

  const setStartBidValues = () => {
    dispatch(setStartingBidFilter({min: low, max: high}));
    onClose();
  };

  const handleValueChange = useCallback((values: number[]) => {
    setLow(values[0]);
    setHigh(values[1]);
  }, []);

  return (
    <Modal visible={open} transparent onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Slider
            animateTransitions
            maximumTrackTintColor="#d3d3d3"
            maximumValue={MAXIMUM_VALUE}
            value={[low, high]}
            minimumTrackTintColor="#1fb28a"
            minimumValue={MINIMUM_VALUE}
            step={50}
            onValueChange={handleValueChange}
            thumbTintColor="#1a9274"
          />
          <Button title="Confirm" onPress={setStartBidValues} />
          <Button title="Cancel" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalRange;
