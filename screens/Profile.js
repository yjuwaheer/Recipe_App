import { StatusBar, StyleSheet, Text, View } from 'react-native';
// Constants
import { whiteColor } from '../shared/Constants';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 10,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: whiteColor,
  },
});
