import PropTypes from 'prop-types';
import React from 'react';

import {Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    height: 30,
    width: 30,
  },
  logo_rounded: {
    borderRadius: 15,
  },
});

function CustomIconButton({onClick, icon, iconStyle, shape}) {
  const newSource =
    typeof icon === 'string' && icon?.startsWith('http') ? {uri: icon} : icon;
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <Image
        source={newSource}
        style={[
          styles.logo,
          iconStyle,
          shape === 'rounded' && styles.logo_rounded,
        ]}
      />
    </TouchableWithoutFeedback>
  );
}

CustomIconButton.defaultProps = {
  iconStyle: {},
  icon: null,
};

CustomIconButton.PropTypes = {
  onClick: PropTypes.func,
  shape: PropTypes.string,
  iconStyle: PropTypes.any,
  icon: PropTypes.any,
};
export default CustomIconButton;
