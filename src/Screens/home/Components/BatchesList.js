import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function BatchesList() {
  return (
    <TouchableOpacity>
      <View style={Styles.topSection}>
        <View style={Styles.imageDiv}>
          <Image
            source={require("../../../../assets/Images/HeadImage.png")}
            style={Styles.image}
          />
        </View>
        <View style={Styles.textDiv}>
          <Text style={Styles.contentType}>Type</Text>
          <Text style={Styles.contentTitle}>
            The Basic Of Computer Fundaments
          </Text>
          <Text style={Styles.contentPrice}>$ 499</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  topSection: {
    marginHorizontal: 20,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 110,
    overflow: "hidden",
    borderBottomColor: "#eeeeee",
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
    backgroundColor: "blue",
    textAlign: "center",
    fontFamily: "sans-serif-condensed",
  },
});

export default BatchesList;
