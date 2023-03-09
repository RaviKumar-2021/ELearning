import React from "react";
import { Button, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../Screens/home/Home";
import Profiles from "../Screens/home/Profiles";
import Batches from "../Screens/home/Batches";
import Learning from "../Screens/home/Learning";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeMenuBar() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Home
            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
            }

            // Batches
            if (route.name === "Batches") {
              iconName = focused ? "ios-people" : "ios-people-outline";
            }

            // Learning
            if (route.name === "Learning") {
              iconName = focused
                ? "chatbubble-ellipses-sharp"
                : "chatbubble-ellipses-outline";
            }

            // Profile
            if (route.name === "Profiles") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Batches" component={Batches} />
        <Tab.Screen name="Learning" component={Learning} />
        <Tab.Screen name="Profiles" component={Profiles} />
      </Tab.Navigator>
    </>
  );
}

export default HomeMenuBar;
