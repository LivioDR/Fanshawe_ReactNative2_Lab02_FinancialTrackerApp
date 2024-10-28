import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionsList from "./TransactionsList/TransactionsList";
import TransactionDetail from "./TransactionDetail/TransactionDetail";
import { Button, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator()


const TransactionsNav = ({transactions}) => {

    const nav = useNavigation()

    return(
        <Stack.Navigator initialRouteName="Transactions List">
            <Stack.Screen
                name="Transactions List"
                children={() => <TransactionsList transactions={transactions} />}
                options={{
                    headerTitle: "Transactions"
                }}
            />

            <Stack.Screen
                name="Transaction Detail"
                component={TransactionDetail}
                options={Platform.OS == 'ios' ? {
                    headerLeft: () => (
                        <Button
                        onPress={() => {nav.navigate("Transactions List")}}
                        title="Back"
                        />
                    )
                } : {}}
            />
    </Stack.Navigator>
    )
}
export default TransactionsNav