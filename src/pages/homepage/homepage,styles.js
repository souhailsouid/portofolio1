import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'homepage': {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 80 }]
  },
  'directory-menu': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'space-between'
  }
});
