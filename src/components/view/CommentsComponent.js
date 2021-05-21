import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import AppText from '../text/AppText';
import CustomIconButton from '../button/IconButton';
import HeaderTextComponent from '../text/HeaderTextComponent';
import LightTextComponent from '../text/LightTextComponent';
import Row from '../layout/Row';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: 16,
  },
  commentWrapper: {
    paddingLeft: 10,
  },
  commentText: {
    paddingHorizontal: 5,
    fontSize: 14,
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  image: {
    height: 35,
    borderRadius: 35 / 2,
    width: 35,
  },
});

//user image with their comments at comment screen

function CommentsComponent({userImages, headerText, comment}) {
  return (
    <Row style={styles.wrapper}>
      <CustomIconButton
        icon={userImages}
        shape="rounded"
        imageStyle={styles.image}
      />
      <AppText style={styles.commentWrapper}>
        <HeaderTextComponent headerText={headerText} style={styles.headText} />
        <LightTextComponent lightText={comment} style={styles.commentText} />
      </AppText>
    </Row>
  );
}

CommentsComponent.defaultProps = {
  headerText: '',
  comment: '',
};
PropTypes.defaultProps = {
  headerText: PropTypes.string,
  comment: PropTypes.string,
};
export default CommentsComponent;
