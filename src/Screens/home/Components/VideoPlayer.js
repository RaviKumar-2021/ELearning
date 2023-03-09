import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Video from "react-native-video";

function VideoPlayer() {
  return (
    <View>
      <Text>Hello Player</Text>
      <Video
        source={{
          uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        }}
        ref={(ref) => {
          this.player = ref;
        }}
        onBuffer={this.onBuffer}
        onError={this.videoError}
        style={styles.backgroundVideo}
      />
    </View>
  );
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default VideoPlayer;
