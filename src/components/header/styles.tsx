import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginVertical: 6,
  },
  columnTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginVertical: 6,
  },
  nameTitle: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
  },
  codeTitle: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 24,
    color: '#333333',
  },
});
