import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    fontSize: 12,
  },
});

// Text component wrapper

function AppText(props) {
  const {style, children, ...attr} = props;
  return (
    <Text style={style} {...attr}>
      {children}
    </Text>
  );
}

AppText.defaultProps = {
  style: styles.container,
};
PropTypes.defaultProps = {
  style: PropTypes.object,
};
export default AppText;
