import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import PlaceholderScreen from "./screens/PlaceholderScreen";

const Tab = createBottomTabNavigator()

export default function App() {
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
        component={PlaceholderScreen}
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