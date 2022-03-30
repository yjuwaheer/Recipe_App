import { StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
// Constants
import { primaryColor, whiteColor } from '../shared/Constants';
// Icons
import { Ionicons } from '@expo/vector-icons';

export default function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => {navigation.goBack()}}>
        <Ionicons name="chevron-back" size={24} color={primaryColor} />
        <Text>Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.header}>Sign In</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <TextInput style={styles.inputBox} placeholder="Enter Email Address" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.inputBox} placeholder="Enter Password" />
        </View>
        <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
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
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 80,
  },
  inputContainer: {
    marginBottom: 40,
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
  signinButton: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: primaryColor,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  signinText: {
    color: whiteColor,
    fontWeight: 'bold',
  },
});
