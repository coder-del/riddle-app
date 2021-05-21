import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  lightText: {
    color: '#A9A9A9',
    fontSize: 12,
  },
});

// text light

function LightTextComponent(props) {
  const {style, lightText, ...attr} = props;
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
PropTypes.defaultProps = {
  style: PropTypes.object,
  lightText: PropTypes.string,
};
export default LightTextComponent;
