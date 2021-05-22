import React, {useContext} from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native';

import * as users from '../../utilities/usersData';
import AppContext from '../../components/context/AppContext';
import CustomIconButton from '../button/IconButton';
const styles = (user, item) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      backgroundColor: user?.id === item?.id ? '#eee' : '#fff',
      paddingVertical: 8,
      borderBottomColor: '#ddd',
      borderBottomWidth: 0.7,
    },
    nameWrap: {
      marginLeft: 14,
      color: user?.id === item?.id ? '#000' : '#a9a9a9',
    },
  });

function UserListView(props) {
  const {setShowUsers} = props;
  const {user, setUser} = useContext(AppContext);
  return (
    <FlatList
      data={users.DATA}
      renderItem={({item}) => (
        <TouchableWithoutFeedback
          onPress={() => {
            setUser(item);
            setShowUsers(false);
          }}>
          <View style={styles(user, item).container}>
            <CustomIconButton
              icon={item?.image}
              iconStyle={styles.image}
              shape="rounded"
            />
            <Text style={styles(user, item).nameWrap}>{item.name}</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    />
  );
}

export default UserListView;
