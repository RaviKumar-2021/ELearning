import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground,} from 'react-native';

export default function Signup() {
  return (
    <ImageBackground
      source={require("../../assets/Images/image_part_002.jpg")}
      style={styles.bacStyle}
    >
        <View style={{ paddingHorizontal: 40, marginTop: 110, }}>
        <Text style={styles.headText}>Reset Password,</Text>
        <Text style={styles.subheadText}>Please enter new password and confirm it!</Text>
      </View>
    <View style={styles.container}>
        <View style={styles.loginContainer}>
        <TextInput style={styles.input} placeholder="New Password" />
        <TextInput style={styles.input} placeholder="Confurm Password" secureTextEntry={true} />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', justifyContent: 'center', position:'absolute', bottom:10,}}>
        <Text style={styles.lastText}>I'm already a member , </Text>
        <Text style={{fontSize: 20, color: "#4c4ef9",fontWeight: 'bold'}}  onPress={() => {navigation.navigate('Signup')}}>Login</Text>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    bacStyle: {
        width: "100%",
        height: "100%",
        position: "absolute",
      },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    width: '80%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  headText: {
    fontSize: 40,
    color: "#fff",
   fontWeight:800
  },
  subheadText: {
    fontSize: 22,
    paddingVertical: 10,
    paddingRight: 60,
    lineHeight: 25,
    color: "red",
    fontStyle:'italic'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  buttonContainer: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderRadius: 5,
    width:"100%"
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '700',
    paddingTop:10,
    fontSize:20,
    paddingBottom:10,
  },
  lastText:{
    color:'yellow',
    fontSize:20
  }

});