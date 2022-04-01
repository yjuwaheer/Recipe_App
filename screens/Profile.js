import { useState, useEffect } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
// Constants
import {
  lightGrayColor,
  lightPinkColor,
  darkerGrayColor,
  primaryColor,
  whiteColor,
  blackColor,
  apiUrl,
  appId,
  appKey,
} from "../shared/Constants";

export default function Profile() {
  // Hooks
  const [loading, setLoading] = useState();
  const [chickenRecipes, setChickenRecipes] = useState();

  useEffect(() => {
    fetchChickenRecipes();
  }, []);

  const fetchChickenRecipes = async () => {
    try {
      const response = await fetch(
        `${apiUrl}&q=chicken&app_id=${appId}&app_key=${appKey}`
      );
      const responseJson = await response.json();
      setChickenRecipes(responseJson.hits);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.recipeCard}>
      <Image source={{ uri: item.recipe.image }} style={styles.recipeImage} />
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeTitle}>{item.recipe.label}</Text>
        <Text style={styles.recipeOverview}>
          Cuisine Type:{" "}
          <Text style={styles.recipeOverviewHighlight}>
            {item.recipe.cuisineType}
          </Text>
        </Text>
        <Text style={styles.recipeOverview}>
          Meal Type:{" "}
          <Text style={styles.recipeOverviewHighlight}>
            {item.recipe.mealType}
          </Text>
        </Text>
        <Text style={styles.recipeOverview}>
          Dish Type:{" "}
          <Text style={styles.recipeOverviewHighlight}>
            {item.recipe.dishType}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={styles.profilePic}
        />
        <View style={styles.profileText}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileDescription}>Foodie Person</Text>
        </View>
        <Text style={styles.recipesHeader}>My Recipes</Text>
      </View>

      <View style={styles.recipesContainer}>
        {loading && (
          <LottieView
            source={require("../assets/foodcarousel.json")}
            autoPlay
            loop
          />
        )}

        {!loading && (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.recipesList}
            data={chickenRecipes}
            renderItem={renderItem}
            keyExtractor={(item) => item.recipe.label}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 10,
    flex: 1,
    backgroundColor: whiteColor,
  },
  profileContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: primaryColor,
    height: "40%",
  },
  profilePic: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    borderWidth: 3,
    borderColor: primaryColor,
  },
  profileText: {
    alignItems: "center",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileDescription: {
    fontSize: 15,
  },
  recipesHeader: {
    fontWeight: "bold",

    color: primaryColor,
    letterSpacing: 1,
  },
  recipesContainer: {
    paddingHorizontal: 20,
    backgroundColor: lightGrayColor,
    height: "60%",
  },
  recipesList: {
    marginTop: 10,
  },
  recipeCard: {
    flexDirection: "row",
    backgroundColor: lightPinkColor,
    height: 165,
    width: "100%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  recipeImage: {
    width: "35%",
    height: "100%",
    borderRadius: 10,
    marginRight: "3%",
  },
  recipeInfo: {
    width: "60%",
  },
  recipeTitle: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 16,
  },
  recipeOverview: {
    color: darkerGrayColor,
  },
  recipeOverviewHighlight: {
    color: blackColor,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
