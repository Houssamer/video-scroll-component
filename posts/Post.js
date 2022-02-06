import { View, Image, Text, TouchableOpacity, Modal } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from './styles';
import { TouchableWithoutFeedback } from 'react-native-web';
import { Video, AVPlaybackStatus } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';

const Post = ({ post }) => {
  const [status, setStatus] = useState({});
  const [isVideo, setIsVideo] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const videoRef = useRef();

  function onPlayPausedPress() {
    status.isPlaying
      ? videoRef.current.pauseAsync()
      : videoRef.current.playAsync();
  }

  console.log(post);

  function get_url_extension(url) {
    return url?.split('.').pop().trim();
  }

  useEffect(() => {
    const extension = get_url_extension(post.urlCopertinaPost);
    if (extension.match(/jpg|jpeg|png/g)) {
      setIsVideo(false);
    } else if (extension.match(/mp4/g)) {
      setIsVideo(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View activeOpacity={0.7} style={styles.top}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.profilePic}
            source={{
              uri: post.urlPhotoUser,
            }}
          />
        </View>
        <Text style={styles.username}>{post.username}</Text>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Description</Text>
          <Text style={styles.modalText}>{post.descrizione}</Text>
          <AntDesign
            name="closesquare"
            size={30}
            color="red"
            onPress={() => setModalVisible(false)}
            style={{ position: 'absolute', bottom: 20, alignSelf: 'center' }}
          />
        </View>
      </Modal>
      {isVideo ? (
        <TouchableWithoutFeedback>
          <View style={{ width: '100%' }}>
            <Video
              ref={videoRef}
              style={styles.video}
              source={{
                uri: post.urlCopertinaPost,
              }}
              isLooping
              resizeMode="cover"
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            <TouchableOpacity
              style={styles.playButtonContainer}
              onPress={() => setButtonVisible(!buttonVisible)}
            >
              {!status.isPlaying ? (
                <AntDesign
                  name="play"
                  size={80}
                  color="white"
                  onPress={() => onPlayPausedPress()}
                />
              ) : (
                (status.isPlaying && buttonVisible) && (
                  <AntDesign
                    name="pausecircle"
                    size={80}
                    color="white"
                    onPress={() => onPlayPausedPress()}
                  />
                )
              )}
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <View>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: post.urlCopertinaPost,
              }}
            />
          </View>
        </View>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Description</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Post;
