import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import CustomIconButton from '../button/IconButton';
import CustomTextButton from '../button/TextButton';
import PropTypes from 'prop-types';
import Row from '../layout/Row';
import TextWithInput from './TextInput';

const styles = StyleSheet.create({
  bottomWrapper: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logo: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

function AddComments(props) {
  const [comment, setComments] = useState('');

  return (
    <Row style={styles.bottomWrapper}>
      <Row>
        <CustomIconButton
          icon={props?.userImage}
          shape="rounded"
          iconStyle={styles.logo}
        />
        <TextWithInput
          title={'Add a comment...'}
          setName={value => {
            setComments(value);
          }}
          value={comment}
        />
      </Row>
      <CustomTextButton
        text={'POST'}
        onClick={() => {
          setComments('');
          props.onPressPost(comment);
        }}
      />
    </Row>
  );
}

AddComments.defaultProps = {
  setName: null,
  title: 'Add data',
};

AddComments.PropTypes = {
  setName: PropTypes.func,
  title: PropTypes.string,
};
export default AddComments;
