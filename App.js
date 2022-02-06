import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import ScrollPage from './screens/ScrollPage';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
