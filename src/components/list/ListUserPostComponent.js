import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

import * as users from '../../utilities/userPostsData';
import ItemViewComponent from './ItemViewComponent';

function ListUserPostComponent({onPress}) {
  const renderItem = ({item}) => (
    <ItemViewComponent
      lightText={'by' + ' ' + item.userFullName}
      headerText={item.title}
      userIcon={item.userImage}
      icon={item.imgUrl}
      date={item.date}
      onPress={onPress}
    />
  );

  return (
    <FlatList
      data={users.DATA}
      renderItem={renderItem}
      keyExtractor={item => item.userId}
    />
  );
}

ListUserPostComponent.defaultProps = {
  onPress: null,
};

ListUserPostComponent.PropTypes = {
  onPress: PropTypes.func,
};

export default ListUserPostComponent;
