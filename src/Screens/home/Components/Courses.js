import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Card from './Card'

export default function Courses() {
  return (
   
      <View style={styles.topSection}>
            <Text style={styles.title}>Popular Courses</Text>
          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
          <Card bgImage={require("../../../../assets/Images/image_part_004.jpg")} 
          tImage={require("../../../../assets/Images/1.png")}
          cTitle={"Disign And Thinking"}
          tName={"Ravi Kumar"}
          />
            <Card bgImage={require("../../../../assets/Images/image_part_004.jpg")} 
          tImage={require("../../../../assets/Images/Onboarding1.png")}
          cTitle={"Hindi"}
          tName={"Ankit Kumar"}
          />
          </ScrollView>
          <Text style={styles.title}>Popular Courses</Text>
          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
          <Card bgImage={require("../../../../assets/Images/image_part_004.jpg")} 
          tImage={require("../../../../assets/Images/1.png")}
          />
            <Card bgImage={require("../../../../assets/Images/image_part_004.jpg")} 
          tImage={require("../../../../assets/Images/Onboarding1.png")}
          />
          </ScrollView>


      </View>
  );
}

const styles = StyleSheet.create({
  topSection:{
    paddingHorizontal: 20,
    paddingVertical:20,
     backgroundColor:"#fff",
     flexDirection:"column",
     borderTopEndRadius:20,
     borderTopStartRadius:20,
  },
  title:{
    fontSize:20,
  },
});