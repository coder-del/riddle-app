import React, {useEffect, useState, useContext} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import * as usercomments from '../utilities/commentsData';
import AddComments from '../components/input/AddComments';
import AppContext from '../components/context/AppContext';
import CommentsComponent from '../components/view/CommentsComponent';
import CustomIconButton from '../components/button/IconButton';

import {backIcon} from '../assets';

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },
  iconWrapper: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  wrapper: {
    padding: 10,
  },
  commentListContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

function CommentScreen({navigation}) {
  const [comments, setComments] = useState([]);
  const {user} = useContext(AppContext);

  navigation.setOptions({
    headerLeft: () => (
      <View style={styles.wrapper}>
        <CustomIconButton
          icon={backIcon}
          iconStyle={styles.iconWrapper}
          onClick={() => navigation.goBack()}
        />
      </View>
    ),
  });

  useEffect(() => {
    setComments(usercomments.COMMENTS);
  }, []);

  const renderItem = ({item, index}) => (
    <CommentsComponent
      headerText={item.userFullName}
      comment={item.comment}
      userImages={item.userImage}
    />
  );

  const handleAddComment = (comment, index) => {
    if (comment?.length > 0) {
      setComments([
        ...comments,
        {
          key: {index},
          userId: user?.id,
          comment: comment,
          userFullName: user?.name,
          userImage: user?.image,
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.commentListContainer}
        data={comments}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
      <AddComments onPressPost={handleAddComment} userImage={user?.image} />
    </View>
  );
}

export default CommentScreen;
