import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
// Constants
import { primaryColor, whiteColor, dishTypeArray } from "../shared/Constants";

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
        <ScrollView
          style={styles.categoriesList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {dishTypeArray.map((dType) => (
            <View
              key={dType.dishType}
              style={{ ...styles.categoryCard, backgroundColor: dType.color }}
            >
              <Image source={dType.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{dType.dishType}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.recipes}>
        <Text style={styles.recipesHeader}>Chicken Recipes</Text>
        <ScrollView
          style={styles.recipesList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {dishTypeArray.map((dType) => (
            <View
              key={dType.dishType}
              style={{ ...styles.categoryCard, backgroundColor: dType.color }}
            >
              <Image source={dType.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{dType.dishType}</Text>
            </View>
          ))}
        </ScrollView>
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
  categories: { marginBottom: 25 },
  categoriesHeader: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoriesList: {},
  categoryCard: {
    marginRight: 20,
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  categoryText: {
    color: whiteColor,
    fontWeight: "bold",
  },
  recipes: { marginBottom: 25 },
  recipesHeader: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  recipesList: {},
});
