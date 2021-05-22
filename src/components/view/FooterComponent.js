import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

import CustomIconButton from '../button/IconButton';
import CustomTextButton from '../button/TextButton';
import IconWithTextComponent from '../text/IconWithTextComponent';
import Row from '../layout/Row';

import AppContext from '../context/AppContext';

import {commentIcon, likeIcon} from '../../assets';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  footerWrapper: {
    justifyContent: 'space-between',
    flex: 1,
  },
  commentText: {
    color: '#A9A9A9',
    fontSize: 12,
    paddingLeft: 4,
  },
  headText: {
    color: '#A9A9A9',
    fontSize: 12,
    paddingHorizontal: 4,
  },
  commentIcon: {
    height: 20,
    width: 20,
  },
  likeIcon: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
});

function FooterComponent({onPress}) {
  const {user} = useContext(AppContext);

  return (
    <View>
      <Row style={styles.footerWrapper}>
        <Row>
          <CustomIconButton icon={likeIcon} iconStyle={styles.likeIcon} />
          <TouchableWithoutFeedback onPress={onPress}>
            <IconWithTextComponent
              icon={commentIcon}
              text={'19 comments'}
              textStyle={styles.commentText}
              position={'right'}
              iconStyle={styles.commentIcon}
            />
          </TouchableWithoutFeedback>
        </Row>
        <Row>
          <CustomTextButton
            text={'Add a Comment'}
            textStyle={styles.headText}
            onClick={onPress}
          />
          <CustomIconButton icon={user?.image} shape="rounded" />
        </Row>
      </Row>
    </View>
  );
}

FooterComponent.defaultProps = {
  onPress: null,
};

FooterComponent.PropTypes = {
  onPress: PropTypes.func,
};

export default FooterComponent;
