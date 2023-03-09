import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Card(props) {
  return (
   
            <View style={styles.Ccard}>
                <ImageBackground 
            source={props.bgImage}
            style={styles.CCImage}
                >
                <View style={styles.Cicons}>
                <Ionicons name='star' size={18} color='gold' style={{paddingHorizontal:10, backgroundColor:"#fff", height:20,  borderRadius:4,}}/>
                <Ionicons name='heart' size={18} color='red' style={{paddingHorizontal:10, backgroundColor:"#fff", height:20, borderRadius:4,}}/>
                </View>
                <Image source={props.tImage} style={styles.timage}/>
                </ImageBackground>
                <View>
                <Text>{props.cTitle}</Text>
                <View style={styles.tname}>
                <Text><FontAwesome5 name="chalkboard-teacher" size={18} color="black" /></Text>
                <Text>{props.tName}</Text>
                </View>
                </View>
            </View>
   
  );
}

const styles = StyleSheet.create({

 Ccard:{
    margin:10,
    marginTop:10,
    width:250,
    borderTopEndRadius:10,
    borderTopStartRadius:10,
    backgroundColor:"#eeeeee",

 },
 CCImage:{
    height:150,
    width:250,
    overflow: "hidden",
    borderRadius:10,
 },
 Cicons:{
    padding:10,
   flex:1,
    justifyContent:"space-between",
    flexDirection:"row",
 },
 timage:{
    height:130,
    width:130,
    position:'absolute',
    bottom:0,
    right:20,
 },
 tname:{
    flexDirection:"row",
    alignItems:"center",
    gap:10,
    fontSize:20,
    padding:5,
 }

});