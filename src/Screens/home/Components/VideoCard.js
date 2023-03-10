import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function VideoCard(props) {
  return (
    // <TouchableOpacity
    //   onPress={() =>
    //     props.navigation.navigate("VideoClasses", { id: props.id })
    //   }
    // >
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
    // </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  topSection: {
    marginHorizontal: 20,
    backgroundColor: "#f9f9f9",
    flexDirection: "row",
    alignItems: "center",
    height: 90,
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
    height: 60,
    width: 60,
  },
  textDiv: {
    width: "60%",
  },

  contentTitle: {
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
  },
  contentTime: {
    fontSize: 14,
    fontFamily: "sans-serif-condensed",
    color: "#a9a9a9",
  },
});

export default VideoCard;
