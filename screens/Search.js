import { StatusBar, StyleSheet, Text, View, TextInput } from "react-native";
// Constants
import {
  lightGrayColor,
  lightPrimaryColor,
  primaryColor,
  whiteColor,
} from "../shared/Constants";
// Icons
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color={primaryColor} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for Recipe..."
        />
      </View>
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: lightPrimaryColor,
    padding: 5,
    borderRadius: 10,
  },
  searchInput: {
    width: "90%",
    marginLeft: 10,
    padding: 10,
    borderLeftWidth: 0.5,
    borderColor: primaryColor,
    fontSize: 15,
  },
});
