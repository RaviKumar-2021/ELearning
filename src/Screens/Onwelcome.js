import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import {Image, StyleSheet, Button } from "react-native"
export default function Onwelcome({ navigation }) {
    
  return (
       <Onboarding
       onDone={()=>navigation.navigate('Login')}
       onSkip={()=>navigation.navigate('Login')}
       titleStyles={{fontFamily: 'sans-serif-condensed', fontSize:35, fontWeight:800,color:"#EC5300"}}
       subTitleStyles={{fontFamily: 'sans-serif-condensed'}}       
      
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../assets/Images/Onboarding1.png')} style={{width:300, height:300,}}/>,
      title: 'Learn Smarter',
      subtitle: 'Being Your Learning Adventure With Us',
     


    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../assets/Images/Onboarding2.png')} style={{width:300, height:300,}}/>,
      title: 'Discover Education',
      subtitle: 'Learn Smarter Not Harder',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../assets/Images/Onboarding3.png')} style={{width:300, height:300,}}/>,
      title: 'Expert Insights',
      subtitle: 'Get Ready To Elevate You Knowledge With Our Expert Tutors',
    },
  ]}
  />
  )
}
const styles=StyleSheet.create({

})

