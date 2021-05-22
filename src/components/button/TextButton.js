import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 12,
  },
});

function CustomTextButton({onClick, style, textStyle, text}) {
  return (
    <TouchableOpacity onPress={onClick} style={style}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

CustomTextButton.defaultProps = {
  style: styles.text,
};

CustomTextButton.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
  text: PropTypes.string,
  textStyle: PropTypes.object,
};

export default CustomTextButton;
