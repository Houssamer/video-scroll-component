import { Dimensions, StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },

  image: {
    width: '100%',
    height: Dimensions.get('window').height,
    top: StatusBar.currentHeight,
  },

  video: {
    width: '100%',
    height: Dimensions.get('window').height,
    top: StatusBar.currentHeight,
  },
  top: {
    position: 'absolute',
    top: StatusBar.currentHeight + 20,
    width: 'auto',
    height: Dimensions.get('window').height * 0.07,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 15,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    left: 10,
    borderRadius: 30,
    shadowColor: 'black',
    elevation: 5,
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 35,
    shadowColor: 'black',
    elevation: 5,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 35,
  },
  username: {
    marginLeft: 15,
    fontSize: 21,
    fontWeight: 'bold',
  },
  modal: {
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.3,
    backgroundColor: 'white',
    shadowColor: 'black',
    elevation: 5,
    borderRadius: 10,
    alignSelf: 'center',
    top: Dimensions.get('screen').height * 0.3,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    width: '50%',
    height: 40,
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    elevation: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  playButtonContainer: {
    zIndex: 20,
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
