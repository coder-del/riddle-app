import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    fontSize: 12,
  },
});

function AppText({style, children, ...attr}) {
  return (
    <Text style={style} {...attr}>
      {children}
    </Text>
  );
}

AppText.defaultProps = {
  style: styles.container,
};

AppText.PropTypes = {
  style: PropTypes.object,
};

export default AppText;
