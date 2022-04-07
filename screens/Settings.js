import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
// Constants
import {
  whiteColor,
  lightGrayColor,
  primaryColor,
  blackColor,
} from "../shared/Constants";
// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Settings() {
  // Hooks
  const [isModalVisible, setModalVisible] = useState(false);

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

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            setModalVisible((prev) => !prev);
          }}
        >
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

      <Modal
        isVisible={isModalVisible}
        backdropColor={whiteColor}
        style={styles.modalStyle}
        onBackButtonPress={() => setModalVisible((prev) => !prev)}
        onBackdropPress={() => setModalVisible((prev) => !prev)}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => {
              setModalVisible((prev) => !prev);
            }}
          >
            <AntDesign name="closecircleo" size={24} color={blackColor} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>About</Text>
          <Text style={styles.modalDescription}>wtcook ~ Recipe App</Text>
          <Text style={styles.modalDescription}>Powered by Edamam</Text>
          <Text style={styles.modalDescription}>v1.0.0</Text>
        </View>
      </Modal>
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
  modalStyle: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: lightGrayColor,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalCloseButton: {
    alignSelf: "flex-end",
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalDescription: {},
});
