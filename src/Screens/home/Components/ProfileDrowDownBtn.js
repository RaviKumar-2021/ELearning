import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

function ProfileDrowDownBtn(props) {
  const [dropDown, setdropDown] = useState(false);
  const obj = props.data;

  const dropDownHandler = () => {
    if (dropDown) {
      setdropDown(false);
    } else {
      setdropDown(true);
    }
  };
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity onPress={dropDownHandler}>
        <View
          style={{
            backgroundColor: "#eeeeee",
            flexDirection: "row",
            height: 50,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            marginTop: 5,
            borderRadius: 8,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>
              <FontAwesome name="user" size={24} color="black" />
            </Text>
            <Text
              style={{ marginLeft: 10, fontFamily: "sans-serif-condensed" }}
            >
              {props.heading}
            </Text>
          </View>
          <View
            style={{
              display: dropDown ? "flex" : "none",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: "blue" }}>Edit</Text>
              <AntDesign name="edit" size={20} color="blue" />
            </TouchableOpacity>
            <AntDesign name="caretdown" size={20} color="black" />
          </View>
          <Text style={{ display: dropDown ? "none" : "flex" }}>
            <AntDesign name="caretright" size={20} color="black" />
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{ display: dropDown ? "flex" : "none" }}>
        <View>
          {Object.entries(obj).map(([key, value]) => {
            return (
              <View style={Styles.dropText}>
                <Text
                  style={{
                    textTransform: "capitalize",
                    fontFamily: "sans-serif-condensed",
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                >
                  {key}
                </Text>
                <Text>{value}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  dropText: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 40,
    alignItems: "center",
    backgroundColor: "#d7ebff",
  },
});

export default ProfileDrowDownBtn;
