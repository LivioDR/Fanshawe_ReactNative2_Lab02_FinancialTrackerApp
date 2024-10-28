import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import PlaceholderScreen from "./screens/PlaceholderScreen";
import { useState } from "react";
import placeholderData from "./utilities/PlaceholderData";
import TransactionsNav from "./screens/TransactionsNav";

const Tab = createBottomTabNavigator()

export default function App() {

  const [data, setData] = useState(placeholderData)

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