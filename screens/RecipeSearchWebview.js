import { StatusBar, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function RecipeSearchWebview({ navigation, route }) {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: route.params.url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 10,
    flex: 1,
  },
});
