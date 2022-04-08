import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { ProgressChart } from "react-native-chart-kit";
// Constants
import {
  blackColor,
  darkerGrayColor,
  primaryColor,
  whiteColor,
} from "../shared/Constants";
// Icons
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function RecipeSearch({ navigation, route }) {
  // Pre calculation
  const totalFatCarbsProtein =
    route.params.recipe.totalNutrients.FAT.quantity +
    route.params.recipe.totalNutrients.CHOCDF.quantity +
    route.params.recipe.totalNutrients.PROCNT.quantity;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: route.params.recipe.image }}
        style={styles.coverImage}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={24} color={primaryColor} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </ImageBackground>

      <ScrollView style={styles.recipeContainer}>
        <Text style={styles.title}>{route.params.recipe.label}</Text>
        <Text
          style={styles.source}
          onPress={() =>
            navigation.navigate("RecipeSearchWebview", {
              url: route.params.recipe.url,
            })
          }
        >
          <Text>From {route.params.recipe.source}</Text>
          <EvilIcons name="external-link" size={16} color={darkerGrayColor} />
        </Text>

        <View style={styles.chartsContainer}>
          <View style={styles.singleChart}>
            <ProgressChart
              data={{
                data: [
                  route.params.recipe.totalNutrients.FAT.quantity /
                    totalFatCarbsProtein,
                ],
              }}
              width={100}
              height={100}
              strokeWidth={16}
              radius={32}
              chartConfig={{
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(232, 103, 38, ${opacity})`,
              }}
              hideLegend={true}
            />
            <Text style={styles.chartLabel}>Fat</Text>
          </View>

          <View style={styles.singleChart}>
            <ProgressChart
              data={{
                data: [
                  route.params.recipe.totalNutrients.CHOCDF.quantity /
                    totalFatCarbsProtein,
                ],
              }}
              width={100}
              height={100}
              strokeWidth={16}
              radius={32}
              chartConfig={{
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 196, 106, ${opacity})`,
              }}
              hideLegend={true}
            />
            <Text style={styles.chartLabel}>Carbs</Text>
          </View>

          <View style={styles.singleChart}>
            <ProgressChart
              data={{
                data: [
                  route.params.recipe.totalNutrients.PROCNT.quantity /
                    totalFatCarbsProtein,
                ],
              }}
              width={100}
              height={100}
              strokeWidth={16}
              radius={32}
              chartConfig={{
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(134, 208, 30, ${opacity})`,
              }}
              hideLegend={true}
            />
            <Text style={styles.chartLabel}>Protein</Text>
          </View>
        </View>

        <View style={styles.ingredientsContainer}>
          <Text style={styles.subHeader}>Ingredients</Text>
          {route.params.recipe.ingredientLines.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>
              {ingredient}
            </Text>
          ))}
        </View>

        <View style={styles.instructionsContainer}>
          <Text style={styles.subHeader}>Instructions</Text>
          <TouchableOpacity
            style={styles.getInstructions}
            onPress={() =>
              navigation.navigate("RecipeSearchWebview", {
                url: route.params.recipe.url,
              })
            }
          >
            <Text style={styles.getInstructionText}>Get Instructions</Text>
            <EvilIcons name="external-link" size={24} color={blackColor} />
          </TouchableOpacity>
        </View>

        <View style={styles.labelsContainer}>
          <Text style={styles.subHeader}>Health Labels</Text>
          {route.params.recipe.healthLabels.map((label, index) => (
            <Text key={index} style={styles.label}>
              {label}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
  },
  coverImage: {
    width: "100%",
    height: 250,
    opacity: 0.8,
    backgroundColor: blackColor,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 10,
    paddingHorizontal: 20,
  },
  backText: {
    color: whiteColor,
    fontSize: 15,
  },
  recipeContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  source: {
    color: darkerGrayColor,
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: 1,
  },
  chartsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  singleChart: {
    alignItems: "center",
  },
  chartLabel: {
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: 1,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ingredientsContainer: {
    marginTop: 20,
  },
  ingredient: {
    marginVertical: 3,
    color: darkerGrayColor,
    fontWeight: "bold",
  },
  instructionsContainer: {
    marginTop: 20,
  },
  getInstructions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: primaryColor,
    backgroundColor: primaryColor,
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    width: 175,
  },
  getInstructionText: {
    fontSize: 16,
    color: whiteColor,
    fontWeight: "bold",
  },
  labelsContainer: {
    marginVertical: 20,
  },
  label: {
    marginVertical: 3,
    color: darkerGrayColor,
    fontWeight: "bold",
  },
});
