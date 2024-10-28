import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaceholderScreen from "./PlaceholderScreen";
import TransactionsList from "./TransactionsList/TransactionsList";

const Stack = createNativeStackNavigator()

const TransactionsNav = ({transactions}) => {

    return(
        <Stack.Navigator initialRouteName="Transactions List">
            <Stack.Screen
                name="Transactions List"
                children={() => <TransactionsList transactions={transactions} />}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Transaction Detail"
                component={PlaceholderScreen}
                options={{
                    headerTitle: "Transaction title",
                }}
            />
    </Stack.Navigator>
    )
}
export default TransactionsNav