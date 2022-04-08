import "react-native-gesture-handler";
import { StatusBar, StyleSheet } from "react-native";
// Nav
import { createStackNavigator } from "@react-navigation/stack";
// Screen
import Search from "../screens/Search";
import RecipeSearch from "../screens/RecipeSearch";
import RecipeSearchWebview from "../screens/RecipeSearchWebview";

const Stack = createStackNavigator();

export default function SearchNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="RecipeSearch" component={RecipeSearch} />
      <Stack.Screen name="RecipeSearchWebview" component={RecipeSearchWebview} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
