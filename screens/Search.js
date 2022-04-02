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
// Icons
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  // Hooks
  const [loading, setLoading] = useState();
  const [loadingMore, setLoadingMore] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState();
  const [nextResultsLink, setNextResultsLink] = useState("");

  useEffect(() => {
    fetchSearchResults("popular");
  }, [search]);

  const fetchSearchResults = async (searchText) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${apiUrl}&q=${searchText}&app_id=${appId}&app_key=${appKey}`
      );
      const responseJson = await response.json();
      setSearchResults(responseJson.hits);
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
      setSearchResults([...searchResults, ...responseJson.hits]);
      setNextResultsLink(responseJson._links.next.href);
      setLoadingMore(false);
    } catch (error) {
      console.error(error);
      setLoadingMore(false);
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
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for Recipe..."
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color={whiteColor} />
        </TouchableOpacity>
      </View>

      <View style={styles.filterButtonContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color={primaryColor} />
          <Text>Filter</Text>
        </TouchableOpacity>
      </View>

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
          data={searchResults}
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: lightPrimaryColor,
    padding: 5,
    borderRadius: 10,
  },
  searchInput: {
    width: "78%",
    marginLeft: 10,
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: primaryColor,
    fontSize: 15,
  },
  searchButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    backgroundColor: primaryColor,
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  filterButtonContainer: { marginTop: 15, width: 90, alignSelf: "flex-end" },
  filterButton: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: primaryColor,
    borderRadius: 5,
    width: "100%",
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
