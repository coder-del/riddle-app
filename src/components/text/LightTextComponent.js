import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  lightText: {
    color: '#A9A9A9',
    fontSize: 12,
  },
});

function LightTextComponent({style, lightText, ...attr}) {
  return (
    <Text style={style} {...attr}>
      {lightText}
    </Text>
  );
}

LightTextComponent.defaultProps = {
  style: styles.lightText,
  lightText: '',
};

LightTextComponent.PropTypes = {
  style: PropTypes.object,
  lightText: PropTypes.string,
};

export default LightTextComponent;
