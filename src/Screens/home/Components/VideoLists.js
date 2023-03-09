import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function VideoLists(props) {
  return (
    <View style={Styles.topSection}>
      <View style={Styles.imageDiv}>
        <Image
          source={require("../../../../assets/Images/Play.png")}
          style={Styles.image}
        />
      </View>
      <View style={Styles.textDiv}>
        <Text style={Styles.contentTitle}>{props.title}</Text>
        <Text style={Styles.contentTime}>{props.duration}</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  topSection: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    overflow: "hidden",
    borderBottomColor: "#eeeeee",
    borderBottomWidth: 1,
    marginBottom: 3,
    borderRadius: 10,
    gap: 10,
  },
  imageDiv: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 30,
    width: 30,
  },
  textDiv: {
    width: "60%",
  },

  contentTitle: {
    fontFamily: "sans-serif-condensed",
    fontSize: 14,
  },
  contentTime: {
    fontSize: 10,
    fontFamily: "sans-serif-condensed",
    color: "#a9a9a9",
  },
});

export default VideoLists;
