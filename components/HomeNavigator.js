import "react-native-gesture-handler";
import { StatusBar, StyleSheet } from "react-native";
// Nav
import { createStackNavigator } from "@react-navigation/stack";
// Screen
import Home from "../screens/Home";
import CategoryRecipes from "../screens/CategoryRecipes";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CategoryRecipes" component={CategoryRecipes} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
