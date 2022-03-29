import { StatusBar, StyleSheet, Text, View, Image } from "react-native";
// Constants
import { primaryColor, whiteColor } from "../shared/Constants";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.userGreet}>
        <Image
          style={styles.userPicture}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text style={styles.greetText}>
          Hello, <Text style={styles.username}>User</Text>
        </Text>
      </View>

      <View style={styles.categories}>
        <Text style={styles.categoriesHeader}>Recipe Categories</Text>
        <View style={styles.categoriesList}></View>
      </View>
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
  userGreet: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  userPicture: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: primaryColor,
  },
  greetText: {
    marginLeft: 10,
  },
  username: {
    fontWeight: "bold",
  },
  categories: {
  },
  categoriesHeader: {
    fontWeight: "bold",
  },
});
