// React imports
import { useState, useEffect } from "react";

// Navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens & components imports
import TransactionsNav from "./screens/TransactionsNav";
import LoadingScreen from "./screens/LoadingScreen";
import SummaryScreen from "./screens/SummaryScreen/SummaryScreen";

// Styling imports
import Ionicons from '@expo/vector-icons/Ionicons';

// Placeholders
import placeholderData from "./utilities/placeholderData"

const Tab = createBottomTabNavigator()

export default function App() {

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setData(placeholderData)
    setLoading(false)
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
        children={() => <SummaryScreen transactions={data}/>}
        options={{
          headerShown: true,
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