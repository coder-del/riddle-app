import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  boldText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginRight: 10,
  },
});

function HeaderTextComponent({style, headerText, ...attr}) {
  return (
    <Text style={[styles.boldText, style]} {...attr}>
      {headerText}{' '}
    </Text>
  );
}

HeaderTextComponent.defaultProps = {
  headerText: '',
};

HeaderTextComponent.propTypes = {
  style: PropTypes.object,
  headerText: PropTypes.string,
};

export default HeaderTextComponent;
