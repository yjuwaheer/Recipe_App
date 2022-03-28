import { StatusBar, StyleSheet, Text, View } from 'react-native';
// Constants
import { whiteColor } from '../shared/Constants';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: whiteColor,
  },
});
