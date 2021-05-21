import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import AppContext from '../components/context/AppContext';
import CustomIconButton from '../components/button/IconButton';
import ListUserPostComponent from '../components/list/ListUserPostComponent';
import Row from '../components/layout/Row';
import UserListView from '../components/view/UserLIstView';

import {logoIcon, hamburgerIcon} from '../assets';

const headerStyles = StyleSheet.create({
  hamLogo: {
    height: 15,
    resizeMode: 'contain',
    width: 15,
  },
  logo: {
    height: 70,
    resizeMode: 'contain',
    width: 70,
  },
  iconWrapper: {
    padding: 10,
  },
  image: {
    borderWidth: 1,
  },
});

function HomeScreen({navigation}) {
  const {user, setUser} = useContext(AppContext);
  const [showUsers, setShowUsers] = useState(false);

  navigation.setOptions({
    headerRight: () => (
      <View style={headerStyles.iconWrapper}>
        <CustomIconButton
          icon={user?.image}
          iconStyle={headerStyles.image}
          shape="rounded"
          onClick={() => setShowUsers(!showUsers)}
        />
      </View>
    ),
    headerTitle: null,
    headerLeft: () => (
      <Row style={headerStyles.iconWrapper}>
        <CustomIconButton
          icon={hamburgerIcon}
          iconStyle={headerStyles.hamLogo}
        />
        <CustomIconButton icon={logoIcon} iconStyle={headerStyles.logo} />
      </Row>
    ),
  });

  return (
    <>
      {showUsers && (
        <UserListView setUser={setUser} setShowUsers={setShowUsers} />
      )}
      <ListUserPostComponent />
    </>
  );
}

export default HomeScreen;
