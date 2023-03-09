import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function NoticeCard(props) {
  return (
   
            <View style={styles.noticeCard}>        
                <View style={styles.noticeContainer}>
                <Text style={styles.noticeCardText}>Test Series</Text>
                <View style={styles.noticeCardIcon}>
                <AntDesign name="arrowright" size={24} color="black" />
                <FontAwesome name="book" size={40} color="black" />
                </View>
                </View>
            </View>
            
  );
}

const styles = StyleSheet.create({

    noticeCard:{
        paddingRight:10

    },
    noticeContainer:{
    backgroundColor:"#eeeeee",
    height:100,
     width:150,
     borderRadius:10,
     padding:10,
 },
 noticeCardText:{
    fontFamily: 'sans-serif-condensed',
    fontSize:18,

 },
 noticeCardIcon:{
    flex:1,
    height:100,
    flexDirection:"row",
    position:"relative",
    top:10,
    justifyContent:'space-between',
    alignItems:'center',
 }

 
});