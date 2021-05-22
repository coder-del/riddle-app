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

function Row({style, children}) {
  return <View style={[styles.container, style]}>{children}</View>;
}

Row.defaultProps = {
  style: styles.container,
};

Row.PropTypes = {
  style: PropTypes.object,
};

export default Row;
