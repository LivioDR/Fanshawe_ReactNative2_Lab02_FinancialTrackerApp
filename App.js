// React imports
import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

// Navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens & components imports
import TransactionsNav from "./screens/TransactionsNav";
import LoadingScreen from "./screens/LoadingScreen";

// Styling imports
import Ionicons from '@expo/vector-icons/Ionicons';

// Placeholders
import PlaceholderScreen from "./screens/PlaceholderScreen";
import placeholderData from "./utilities/PlaceholderData";

const Tab = createBottomTabNavigator()

export default function App() {

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setData(placeholderData)
    setTimeout(()=>{
      setLoading(false)

    },2500)
  },[])

  if(loading){
    return(
      <LoadingScreen/>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Transactions"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen 
        name="Transactions"
        children={() => <TransactionsNav transactions={data} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="trending-up"
              size={size}
              color={color}
            />
          )
        }}
        />
        <Tab.Screen 
        name="Summary"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="list-outline"
              size={size}
              color={color}
            />
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}