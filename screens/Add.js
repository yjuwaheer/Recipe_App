import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default function Add() {
  return (
    <View style={styles.container}>
      <Text>Add</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
    flex: 1,
  },
});
