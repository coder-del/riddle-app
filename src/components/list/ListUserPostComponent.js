import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

import * as users from '../../utilities/mockUserData';
import ItemViewComponent from './ItemViewComponent';


//listing user post at home screen

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
PropTypes.defaultProps = {
  onPress: PropTypes.func,
};
export default ListUserPostComponent;
