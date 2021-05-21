import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  boldText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
});

// Bold Text

function HeaderTextComponent(props) {
  const {style, ...attr} = props;
  return (
    <>
      <Text style={style} {...attr}>
        {props.headerText}
      </Text>
    </>
  );
}

HeaderTextComponent.defaultProps = {
  style: styles.boldText,
  headerText: '',
};
PropTypes.defaultProps = {
  style: PropTypes.object,
  headerText: PropTypes.string,
};
export default HeaderTextComponent;
