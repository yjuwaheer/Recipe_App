import "react-native-gesture-handler";
import { StatusBar, StyleSheet } from "react-native";
// Nav
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Navigators
import AppNavigator from "./components/AppNavigator";
// Screens
import Intro from "./screens/Intro";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Intro" component={Intro} /> */}
        {/* <Stack.Screen name="Signin" component={Signin} /> */}
        {/* <Stack.Screen name="Signup" component={Signup} /> */}
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
