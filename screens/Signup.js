import { StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
// Constants
import { primaryColor, whiteColor } from '../shared/Constants';
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
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Last Name</Text>
          <TextInput style={styles.inputBox} placeholder="Enter Last Name" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput style={styles.inputBox} placeholder="Enter Email Address" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.inputBox} placeholder="Create a Password" />
        </View>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
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
    marginVertical: 40,
  },
  inputContainer: {
    marginBottom: 30,
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
  },
  registerButton: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: primaryColor,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  registerText: {
    color: whiteColor,
    fontWeight: 'bold',
  },
});
