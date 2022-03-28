import { StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
// Constants
import { primaryColor } from '../shared/Constants';
// Icons
import { Ionicons } from '@expo/vector-icons';

export default function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => {navigation.goBack()}}>
        <Ionicons name="chevron-back" size={24} color={primaryColor} />
        <Text>Back</Text>
      </TouchableOpacity>
      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
    flex: 1,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
