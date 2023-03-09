import React from "react";
import { Button, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../Screens/home/Home";
import Profiles from "../Screens/home/Profiles";
import Batches from "../Screens/home/Batches";
import Chats from "../Screens/home/Chats";
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
              color: "green";
            }

            // Batches
            if (route.name === "Batches") {
              iconName = focused ? "ios-people" : "ios-people-outline";
            }

            // Chats
            if (route.name === "Chats") {
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
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Profiles" component={Profiles} />
      </Tab.Navigator>
    </>
  );
}

export default HomeMenuBar;
