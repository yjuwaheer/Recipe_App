import { useState, useEffect } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import LottieView from "lottie-react-native";
// Constants
import {
  lightPrimaryColor,
  primaryColor,
  whiteColor,
  apiUrl,
  appId,
  appKey,
  lightPinkColor,
  darkerGrayColor,
  blackColor,
} from "../shared/Constants";

export default function CategoryRecipes({ navigation, route }) {
  // Hooks
  const [loading, setLoading] = useState();
  const [loadingMore, setLoadingMore] = useState(false);
  const [results, setResults] = useState();
  const [nextResultsLink, setNextResultsLink] = useState("");

  useEffect(() => {
    fetchResults(route.params.dishType, route.params.query);
  }, []);

  const fetchResults = async (dishType, query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${apiUrl}&q=${query}&app_id=${appId}&app_key=${appKey}&dishType=${dishType}`
      );
      const responseJson = await response.json();
      setResults(responseJson.hits);
      setNextResultsLink(responseJson._links.next.href);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const fetchAdditionalSearchResults = async () => {
    setLoadingMore(true);
    try {
      const response = await fetch(nextResultsLink);
      const responseJson = await response.json();
      setResults([...results, ...responseJson.hits]);
      setNextResultsLink(responseJson._links.next.href);
      setLoadingMore(false);
    } catch (error) {
      console.error(error);
      setLoadingMore(false);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.recipeCard}
      onPress={() => navigation.navigate("Recipe", { recipe: item.recipe })}
    >
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
          data={results}
          renderItem={renderItem}
          keyExtractor={(item) => item.recipe.label}
          ListFooterComponent={
            <TouchableOpacity
              disabled={loadingMore}
              style={styles.loadMore}
              onPress={() => fetchAdditionalSearchResults()}
            >
              <Text style={styles.loadMoreText}>
                {loadingMore ? "Loading..." : "Load More"}
              </Text>
            </TouchableOpacity>
          }
        />
      )}
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
  recipesList: {},
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
  loadMore: {
    marginBottom: 20,
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: primaryColor,
    borderRadius: 10,
  },
  loadMoreText: {
    color: primaryColor,
    fontWeight: "bold",
  },
});
