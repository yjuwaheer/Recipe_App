import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
// Nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import Home from '../screens/Home';
import Search from '../screens/Search';
import Add from '../screens/Add';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
