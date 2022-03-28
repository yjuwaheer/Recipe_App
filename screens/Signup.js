import { StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
// Constants
import { primaryColor } from '../shared/Constants';
// Icons
import { Ionicons } from '@expo/vector-icons';

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => {navigation.goBack()}}>
        <Ionicons name="chevron-back" size={24} color={primaryColor} />
        <Text>Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.header}>Register an account</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput style={styles.inputBox} placeholder="Enter First Name" />
        </View>
      </ScrollView>
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
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  inputLabel: {
    marginBottom: 10,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: "#E2E2E2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
});
