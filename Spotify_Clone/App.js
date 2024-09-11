import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Stacknav';

export default function App() {
  return ( <>
    {/* // <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    // </View> */}
    
    <Navigation></Navigation>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
});