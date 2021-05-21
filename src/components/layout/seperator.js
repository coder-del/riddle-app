import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9a9',
  },
});

// seperator in list
function Seperator(props) {
  return <View style={props.style} />;
}

Seperator.defaultProps = {
  style: styles.container,
};

export default Seperator;
