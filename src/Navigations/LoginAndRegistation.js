import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onwelcome from "../Screens/Onwelcome";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import HomeMenuBar from "./HomeMenuBar";
import CourseDetails from "../Screens/home/CourseDetails";
import VideoClasses from "../Screens/home/VideoClasses";
function LoginAndRegistation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onwelcome" component={Onwelcome} options={style} />
        <Stack.Screen name="Login" component={Login} options={style} />
        <Stack.Screen name="Signup" component={Signup} options={style} />
        <Stack.Screen
          name="HomeMenuBar"
          component={HomeMenuBar}
          options={style}
        />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
        <Stack.Screen name="VideoClasses" component={VideoClasses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const style = {
  headerShown: false,
};

export default LoginAndRegistation;
