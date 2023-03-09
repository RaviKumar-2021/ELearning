import React from "react";
import { StackNavigator } from "react-navigation";
import CourseDetails from "../Screens/home/CourseDetails";

export default function DrawerMenuBar() {
  const Stack = StackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
    </Stack.Navigator>
  );
}
