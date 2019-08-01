import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'collection-item': {
    'width': [{ 'unit': '%H', 'value': 0.22 }],
    'display': 'flex',
    'flexDirection': 'column',
    'height': [{ 'unit': 'px', 'value': 350 }],
    'alignItems': 'center',
    'position': 'relative'
  },
  'collection-item image': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 0.95 }],
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'collection-item custom-button': {
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'opacity': '0.7',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 255 }],
    'display': 'none'
  },
  'collection-item:hover image': {
    'opacity': '0.8'
  },
  'collection-item:hover custom-button': {
    'opacity': '0.85',
    'display': 'flex'
  },
  'collection-item collection-footer': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 0.05 }],
    'display': 'flex',
    'justifyContent': 'space-between',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'collection-item collection-footer name': {
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'collection-item collection-footer price': {
    'width': [{ 'unit': '%H', 'value': 0.1 }]
  }
});
