import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// Constants
import { primaryColor, whiteColor } from '../shared/Constants';
// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Intro({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <MaterialCommunityIcons name="food-croissant" size={100} color="black" />
        <Text style={styles.brandName}>WTCöök</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.registerButton} onPress={() => {navigation.push("Signup")}}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signinButton} onPress={() => {navigation.push("Signin")}}>
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'space-around',
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttons: {
    alignItems: 'center',
  },
  registerButton: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: primaryColor,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  registerText: {
    color: whiteColor,
    fontWeight: 'bold',
  },
  signinButton: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: primaryColor,
    borderRadius: 10,
  },
  signinText: {
    color: primaryColor,
    fontWeight: 'bold',
  },
});
