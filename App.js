import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginAndRegistation from "./src/Navigations/LoginAndRegistation";
import Login from "./src/Screens/Login";
// import Signup from './src/Screens/Signup';
// import ForgetPassword from './src/Screens/ForgetPassword';
// import Home from './src/Screens/home/Home'
// import LoginAndRegistation from './src/Navigations/LoginAndRegistation';
// import Onwelcome from './src/Screens/Onwelcome'
// import Home from "./src/Screens/home/Home";
// import HomeMenuBar from './src/Navigations/HomeMenuBar';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    // <Login/>
    // <Signup/>
    // <ForgetPassword/>
    // <Home/>
    <LoginAndRegistation />
    // <LoginAndRegistation/>
    // <Home/>
    // <NavigationContainer>
    // {/* <HomeMenuBar/> */}
    // </NavigationContainer>
  );
}
