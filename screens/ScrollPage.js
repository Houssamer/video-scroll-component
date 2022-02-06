import { View, Text, FlatList, Dimensions, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import Post from '../posts/Post';

const ScrollPage = () => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  function GetPosts(userId, limit) {
    var urlTmp = 'https://www.xploroplatform.com/account/discover.php';
    var url = urlTmp + '?limit=' + limit + '&userId=' + userId;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        dataToShow = JSON.parse(xhr.responseText);
        setCount(count + 1);
        const arr = [...posts, ...dataToShow];
        setPosts(arr.filter((item, index, self) => {
          return self.findIndex(t => t.id === item.id) === index;
        }));
      }
    };
    xhr.send();
  }

  useEffect(() => {
    GetPosts(12, 2);
  }, []);
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
    >
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        onEndReached={() => GetPosts(12,1)}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default ScrollPage;
