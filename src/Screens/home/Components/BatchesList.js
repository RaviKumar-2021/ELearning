import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function BatchesList(props) {
  console.log("Id " + props.id);

  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("CourseDetails", { id: props.id })
      }
    >
      <View style={Styles.topSection}>
        <View style={Styles.imageDiv}>
          <Image
            source={require("../../../../assets/Images/HeadImage.png")}
            style={Styles.image}
          />
        </View>
        <View style={Styles.textDiv}>
          <Text style={Styles.contentType}>{props.type}</Text>
          <Text style={Styles.contentTitle}>{props.title}</Text>
          <Text style={Styles.contentPrice}>$ {props.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  topSection: {
    marginHorizontal: 20,
    backgroundColor: "#fef8e3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 110,
    overflow: "hidden",
    borderBottomColor: "#fdddf3",
    borderBottomWidth: 1,
    marginBottom: 3,
    borderRadius: 10,
  },
  imageDiv: {
    width: "30%",
    height: 120,
    width: 120,
    alignItems: "center",
  },
  image: {
    height: 120,
    width: 120,
  },
  textDiv: {
    width: "60%",
  },
  contentType: {
    fontFamily: "sans-serif-condensed",
    color: "#fff",
    backgroundColor: "#dddddd",
    width: 50,
    textAlign: "center",
  },
  contentTitle: {
    fontFamily: "sans-serif-condensed",
    fontSize: 18,
  },
  contentPrice: {
    width: "50%",
    color: "yellow",
    fontSize: 20,
    backgroundColor: "purple",
    textAlign: "center",
    fontFamily: "sans-serif-condensed",
  },
});

export default BatchesList;
