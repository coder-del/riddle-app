import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

//Align items Horizontally

function Row({style, children}) {
  return <View style={[styles.container, style]}>{children}</View>;
}

Row.defaultProps = {
  style: styles.container,
};
PropTypes.defaultProps = {
  style: PropTypes.object,
};
export default Row;
