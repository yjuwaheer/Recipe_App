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
import Modal from "react-native-modal";
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
  lightGrayColor,
  mealTypeArray,
} from "../shared/Constants";
// Icons
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Search({ navigation }) {
  // Hooks
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [search, setSearch] = useState("popular");
  const [searchResults, setSearchResults] = useState([]);
  const [nextResultsLink, setNextResultsLink] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedMealTypes, setSelectedMealTypes] = useState([]);

  useEffect(() => {
    fetchSearchResults("popular");
  }, []);

  const fetchSearchResults = async (searchText) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${apiUrl}&q=${searchText}&app_id=${appId}&app_key=${appKey}`
      );
      const responseJson = await response.json();
      setSearchResults(responseJson.hits);
      // Check if there is any results
      if (responseJson.hits.length > 0) {
        setNextResultsLink(responseJson._links.next.href);
      }
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

  const onSearchHandler = () => {
    if (search.length > 0) {
      fetchSearchResults(search);
    }
  };

  const handleFilterList = (mealType) => {
    let tempSelection = selectedMealTypes;
    if (tempSelection.includes(mealType)) {
      tempSelection = tempSelection.filter((item) => item !== mealType);
    } else {
      tempSelection.push(mealType);
    }

    setSelectedMealTypes(tempSelection);
    setModalVisible(false);

    // If there is no meal type selected, show all results
    if (tempSelection.length === 0) {
      fetchSearchResults(search);
    } else {
      fetchFilteredSearchResults(tempSelection);
    }
  };

  const fetchFilteredSearchResults = async (mealTypes) => {
    let builtFilter = "";
    mealTypes.forEach((item) => {
      builtFilter += `&mealType=${item}`;
    });

    setLoading(true);
    try {
      const response = await fetch(
        `${apiUrl}&q=${search}&app_id=${appId}&app_key=${appKey}${builtFilter}`
      );
      const responseJson = await response.json();
      setSearchResults(responseJson.hits);
      // Check if there is any results
      if (responseJson.hits.length > 0) {
        setNextResultsLink(responseJson._links.next.href);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.recipeCard}
      onPress={() =>
        navigation.navigate("RecipeSearch", { recipe: item.recipe })
      }
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
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search for Recipe..."
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => onSearchHandler()}
        >
          <Ionicons name="search" size={24} color={whiteColor} />
        </TouchableOpacity>
      </View>

      <View style={styles.filterButtonContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {
            setModalVisible((prev) => !prev);
          }}
        >
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

      {!loading && searchResults.length === 0 && (
        <View style={styles.noResultContainer}>
          <View>
            <LottieView
              source={require("../assets/sadSushi.json")}
              autoPlay
              loop
              style={styles.noResultAnimation}
            />
          </View>
          <Text style={styles.noResultText}>Sorry! No Results Found :(</Text>
        </View>
      )}

      {!loading && searchResults.length > 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.recipesList}
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.recipe.label}-${index}`}
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
          <Text style={styles.modalTitle}>Meal Type</Text>

          {mealTypeArray.map((mealType) => (
            <TouchableOpacity
              key={mealType.id}
              style={
                selectedMealTypes.includes(mealType.mealType)
                  ? styles.itemPillSelected
                  : styles.itemPill
              }
              onPress={() => handleFilterList(mealType.mealType)}
            >
              <Text
                style={
                  selectedMealTypes.includes(mealType.mealType)
                    ? styles.itemPillTextSelected
                    : styles.itemPillText
                }
              >
                {mealType.mealType}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
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
  noResultContainer: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  noResultAnimation: {
    width: 100,
    height: 100,
  },
  noResultText: {
    fontSize: 20,
    fontWeight: "bold",
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
  itemPill: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: primaryColor,
    borderRadius: 10,
  },
  itemPillText: {
    color: primaryColor,
    fontWeight: "bold",
  },
  itemPillSelected: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: primaryColor,
  },
  itemPillTextSelected: {
    color: whiteColor,
    fontWeight: "bold",
  },
});
