import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Slider from "react-native-slider";
import LottieView from "lottie-react-native";
// Constants
import { darkerGrayColor, primaryColor, whiteColor } from "../shared/Constants";
// Icons
import { Ionicons } from "@expo/vector-icons";

export default function Add() {
  // Hooks
  const [cookTime, setCookTime] = useState(0.2);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.uploadTitle}>Upload a new recipe</Text>

        <TouchableOpacity style={styles.uploadCover}>
          <LottieView
            source={require("../assets/uploadPic.json")}
            autoPlay
            loop
            style={styles.uploadAnimation}
          />
          <Text style={styles.uploadMainText}>Add Recipe Cover</Text>
          <Text style={styles.uploadSecondaryText}>
            Click here to upload cover{" "}
          </Text>
        </TouchableOpacity>

        <View style={styles.field}>
          <Text style={styles.title}>Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Recipe Name"
          ></TextInput>
        </View>

        <View style={styles.field}>
          <Text style={styles.title}>Description</Text>
          <TextInput
            textAlignVertical="top"
            multiline={true}
            numberOfLines={6}
            style={styles.textInput}
            placeholder="Enter Recipe Description"
          ></TextInput>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.title}>Time to cook</Text>
          <Slider
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            minimumTrackTintColor={primaryColor}
            value={cookTime}
            onValueChange={(value) => setCookTime(value)}
          />
          <Text style={styles.cookTimeText}>
            {parseInt(cookTime * 250)} Mins
          </Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.title}>Procedure</Text>
          <TextInput
            textAlignVertical="top"
            multiline={true}
            numberOfLines={6}
            style={styles.textInput}
            placeholder="Enter Recipe Procedure"
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 10,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: whiteColor,
  },
  uploadTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  uploadCover: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: darkerGrayColor,
    marginBottom: 20,
    borderStyle: "dashed",
  },
  uploadAnimation: {
    height: "100%",
    width: "100%",
    position: "absolute",
    opacity: 0.55,
  },
  uploadMainText: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
  },
  uploadSecondaryText: {
    fontSize: 13.5,
    color: darkerGrayColor,
    fontWeight: "bold",

  },
  field: { marginBottom: 30 },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: darkerGrayColor,
    borderRadius: 5,
  },
  track: {
    backgroundColor: darkerGrayColor,
  },
  thumb: {
    backgroundColor: whiteColor,
    borderWidth: 3,
    borderColor: primaryColor,
  },
  sliderContainer: {
    marginBottom: 30,
  },
  cookTimeText: {
    textAlign: "center",
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: darkerGrayColor,
    padding: 10,
    borderRadius: 5,
    width: 100,
    fontSize: 14,
    fontWeight: "bold",
  },
  submitButton: {
    alignItems: "center",
    width: "100%",
    backgroundColor: primaryColor,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  submitText: {
    color: whiteColor,
    fontWeight: "bold",
  },
});
