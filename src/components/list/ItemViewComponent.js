import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

import CustomIconButton from '../button/IconButton';
import FooterComponent from '../view/FooterComponent';
import HeaderTextComponent from '../text/HeaderTextComponent';
import IconWithTextComponent from '../text/IconWithTextComponent';
import LightTextComponent from '../text/LightTextComponent';

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 8,
    margin: 16,
    marginBottom: 8,
    padding: 16,
    backgroundColor: '#fff',
  },
  pictureTile: {
    borderRadius: 4,
    height: 140,
    resizeMode: 'cover',
    width: '100%',
    marginBottom: 16,
  },
  lightText: {
    color: '#A9A9A9',
    fontSize: 12,
    paddingVertical: 10,
  },
  textWrap: {
    padding: 5,
  },
  headerText: {
    alignItems: 'flex-start',
    paddingBottom: 8,
  },
});

function ItemViewComponent({userIcon, lightText, headerText, date, icon}) {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerText}>
        <IconWithTextComponent
          icon={userIcon}
          text={lightText}
          textStyle={styles.textWrap}
          position={'right'}
        />
      </View>
      <View>
        <HeaderTextComponent headerText={headerText} numberOfLines={2} />
        <LightTextComponent lightText={date} style={styles.lightText} />
        <CustomIconButton icon={icon} iconStyle={styles.pictureTile} />
        <FooterComponent
          onPress={() => {
            navigation.navigate('Comments');
          }}
        />
      </View>
    </View>
  );
}

ItemViewComponent.defaultProps = {
  lightText: '',
  headerText: '',
  date: '',
};

IconWithTextComponent.propTypes = {
  iconStyle: PropTypes.object,
  lightText: PropTypes.string,
  headerText: PropTypes.string,
  date: PropTypes.string,
};
export default ItemViewComponent;
