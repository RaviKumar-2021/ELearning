import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import VideoLists from "./Components/VideoLists";
import VideoPlay from "./Components/VideoPlay";
import course from "../../../assets/Json/course.json";

function VideoClasses({ navigation, route }) {
  const { id } = route.params;
  const courseData = course.course;

  console.log(id);
  const value = courseData[id];
  console.log(value);
  const windowHeight = Dimensions.get("window").height;
  const [getUrl, setgetUrl] = useState(
    "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
  );
  const getIdHandler = (e) => {
    setgetUrl(e);
  };
  return (
    <>
      <View>
        <VideoPlay url={getUrl} />
        <Text
          style={{
            margin: 10,
            fontSize: 18,
            fontFamily: "sans-serif-condensed",
          }}
        >
          Videoes
        </Text>
        <ScrollView style={{ height: windowHeight - 400 }}>
          {value.chapter.map((e, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => getIdHandler(e.url)}>
                <VideoLists
                  navigation={navigation}
                  title={e.title}
                  duration={e.duration}
                  key={i}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}

export default VideoClasses;
