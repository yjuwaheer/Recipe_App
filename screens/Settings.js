import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
// Constants
import { whiteColor, lightGrayColor, primaryColor } from "../shared/Constants";
// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Settings() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.menuList}>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialCommunityIcons
            name="account"
            size={26}
            color={primaryColor}
          />
          <Text style={styles.menuItemText}>Account</Text>
        </TouchableOpacity>

        <View style={styles.separator}></View>

        <TouchableOpacity style={styles.menuItem}>
          <Feather name="info" size={26} color={primaryColor} />
          <Text style={styles.menuItemText}>About</Text>
        </TouchableOpacity>

        <View style={styles.separator}></View>

        <TouchableOpacity style={styles.menuItem}>
          <MaterialCommunityIcons
            name="logout"
            size={26}
            color={primaryColor}
          />
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: lightGrayColor,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: "15%",
  },
  menuList: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  menuItem: { flexDirection: "row", alignItems: "center" },
  menuItemText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  separator: {
    borderBottomColor: lightGrayColor,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
