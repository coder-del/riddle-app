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

//Icon with Click Functionality
function CustomIconButton({onClick, icon, iconStyle, shape}) {
  // console.log('<>adsd', icon);
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <Image
        // source={icon}
        source={icon}
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
  // icon: null,
};

PropTypes.defaultProps = {
  onClick: PropTypes.func,
  shape: PropTypes.string,
  iconStyle: PropTypes.any,
  // icon: PropTypes.any,
};
export default CustomIconButton;
