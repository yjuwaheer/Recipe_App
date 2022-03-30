import { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
// Constants
import {
  primaryColor,
  whiteColor,
  blackColor,
  dishTypeArray,
  apiUrl,
  appId,
  appKey,
  lightGrayColor,
} from "../shared/Constants";

export default function Home() {
  // Hooks
  const [chickenRecipes, setChickenRecipes] = useState();
  const [vegetarianRecipes, setVegetarianRecipes] = useState();
  const [veganRecipes, setVeganRecipes] = useState();

  useEffect(() => {
    fetchChickenRecipes();
    fetchVegetarianRecipes();
    fetchVeganRecipes();
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

  const fetchVegetarianRecipes = async () => {
    try {
      const response = await fetch(
        `${apiUrl}&q=vegetable&app_id=${appId}&app_key=${appKey}`
      );
      const responseJson = await response.json();
      setVegetarianRecipes(responseJson.hits);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVeganRecipes = async () => {
    try {
      const response = await fetch(
        `${apiUrl}&q=vegan&app_id=${appId}&app_key=${appKey}`
      );
      const responseJson = await response.json();
      setVeganRecipes(responseJson.hits);
    } catch (error) {
      console.error(error);
    }
  };

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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.categories}>
          <Text style={styles.categoriesHeader}>Recipe Categories</Text>
          <ScrollView
            style={styles.categoriesList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {dishTypeArray.map((dType) => (
              <TouchableOpacity
                key={dType.dishType}
                style={{ ...styles.categoryCard, backgroundColor: dType.color }}
              >
                <Image source={dType.image} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{dType.dishType}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.recipes}>
          <Text style={styles.recipesHeader}>Chicken Recipes</Text>
          {!chickenRecipes && (
            <View style={styles.recipePlaceholder}>
              <LottieView
                source={require("../assets/loader.json")}
                autoPlay
                loop
              />
            </View>
          )}
          <ScrollView
            style={styles.recipesList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {chickenRecipes &&
              chickenRecipes.map((recipe) => (
                <TouchableOpacity
                  key={Math.random()}
                  style={{ ...styles.recipeCard }}
                >
                  <ImageBackground
                    source={{ uri: recipe.recipe.image }}
                    resizeMode="cover"
                    style={styles.recipeImage}
                  >
                    <Text style={styles.recipeText}>{recipe.recipe.label}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>

        <View style={styles.recipes}>
          <Text style={styles.recipesHeader}>Vegetarian Recipes</Text>
          {!vegetarianRecipes && (
            <View style={styles.recipePlaceholder}>
              <LottieView
                source={require("../assets/loader.json")}
                autoPlay
                loop
              />
            </View>
          )}
          <ScrollView
            style={styles.recipesList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {vegetarianRecipes &&
              vegetarianRecipes.map((recipe) => (
                <TouchableOpacity
                  key={Math.random()}
                  style={{ ...styles.recipeCard }}
                >
                  <ImageBackground
                    source={{ uri: recipe.recipe.image }}
                    resizeMode="cover"
                    style={styles.recipeImage}
                  >
                    <Text style={styles.recipeText}>{recipe.recipe.label}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>

        <View style={styles.recipes}>
          <Text style={styles.recipesHeader}>Vegan Recipes</Text>
          {!veganRecipes && (
            <View style={styles.recipePlaceholder}>
              <LottieView
                source={require("../assets/loader.json")}
                autoPlay
                loop
              />
            </View>
          )}
          <ScrollView
            style={styles.recipesList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {veganRecipes &&
              veganRecipes.map((recipe) => (
                <TouchableOpacity
                  key={Math.random()}
                  style={{ ...styles.recipeCard }}
                >
                  <ImageBackground
                    source={{ uri: recipe.recipe.image }}
                    resizeMode="cover"
                    style={styles.recipeImage}
                  >
                    <Text style={styles.recipeText}>{recipe.recipe.label}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </ScrollView>
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
  recipePlaceholder: {
    backgroundColor: lightGrayColor,
    width: 300,
    height: 150,
    borderRadius: 10,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  recipeImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.8,
    backgroundColor: blackColor,
  },
  recipeCard: {
    marginRight: 20,
    width: 300,
    height: 150,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
  },
  recipeText: {
    position: "absolute",
    bottom: 0,
    color: whiteColor,
    backgroundColor: blackColor,
    fontSize: 17,
    fontWeight: "bold",
    padding: 7,
  },
});
