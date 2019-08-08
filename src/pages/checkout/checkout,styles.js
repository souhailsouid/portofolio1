import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'checkout-page': {
    'width': [{ 'unit': '%H', 'value': 0.55 }],
    'minHeight': [{ 'unit': 'vh', 'value': 90 }],
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'margin': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'checkout-page checkout-header': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'justifyContent': 'space-between',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'darkgrey' }]
  },
  'checkout-page checkout-header header-block': {
    'textTransform': 'capitalize',
    'width': [{ 'unit': '%H', 'value': 0.23 }]
  },
  'checkout-page checkout-header header-block:last-child': {
    'width': [{ 'unit': '%H', 'value': 0.08 }]
  },
  'checkout-page total': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'fontSize': [{ 'unit': 'px', 'value': 36 }]
  },
  'checkout-page button': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'checkout-page test-warning': {
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'rem', 'value': 2.5 }],
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'color': 'red'
  }
});
