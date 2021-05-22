import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  text: {
    height: 30,
    padding: 0,
    marginLeft: 16,
  },
});

function TextWithInput({inputTextStyle, setName, value, title}) {
  return (
    <TextInput
      style={[styles.text, inputTextStyle]}
      onChangeText={setName}
      value={value}
      placeholder={title}
    />
  );
}

TextWithInput.propTypes = {
  setName: () => {},
  title: 'Add data',
  value: '',
};

TextWithInput.PropTypes = {
  setName: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
};

export default TextWithInput;
