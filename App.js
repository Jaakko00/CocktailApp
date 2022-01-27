import { Text, View } from 'react-native';
import { useEffect, useState } from "react";
import Search from './search/Search';
import Home from './home/Home';
import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor: "#171717"
      }}
      
      screenOptions={{
        tabBarActiveTintColor: "#E40066",
        tabBarInactiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "transparent",
        tabBarInactiveBackgroundColor: "transparent",
        
        
        
        headerShown: false,
        
        style: {
          backgroundColor: "#171717",
          
          
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="glass-cocktail"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default function App() {
  const navTheme = {
    colors: {
      background: "#171717"
    }
  };

  return (
    <NavigationContainer theme={navTheme}>
      <MyTabs></MyTabs>
    </NavigationContainer>
  );
}