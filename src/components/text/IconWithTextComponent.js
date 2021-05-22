import React from 'react';
import {Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import LightTextComponent from './LightTextComponent';
import Row from '../layout/Row';

const styles = StyleSheet.create({
  container: {},
  logo: {
    borderRadius: 15,
    height: 30,
    width: 30,
  },
  textWrap: {
    padding: 10,
  },
});

function IconWithTextComponent({
  icon,
  iconStyle,
  textStyle,
  position,
  text,
  ...attr
}) {
  const newSource =
    typeof icon === 'string' && icon?.startsWith('http') ? {uri: icon} : icon;
  return (
    <Row style={styles.container}>
      {position === 'left' && (
        <LightTextComponent style={textStyle} {...attr} lightText={text} />
      )}
      <Image source={newSource} style={iconStyle} />
      {position === 'right' && (
        <LightTextComponent style={textStyle} lightText={text} {...attr} />
      )}
    </Row>
  );
}

IconWithTextComponent.defaultProps = {
  position: 'left',
  iconStyle: styles.logo,
  textStyle: styles.textWrap,
  icon: '',
};

IconWithTextComponent.propTypes = {
  position: PropTypes.string,
  iconStyle: PropTypes.string,
  textStyle: PropTypes.object,
  icon: PropTypes.any,
};

export default IconWithTextComponent;
