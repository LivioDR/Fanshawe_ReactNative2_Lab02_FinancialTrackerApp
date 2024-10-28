import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionsList from "./TransactionsList/TransactionsList";
import TransactionDetail from "./TransactionDetail/TransactionDetail";

const Stack = createNativeStackNavigator()

const TransactionsNav = ({transactions}) => {

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
            />
    </Stack.Navigator>
    )
}
export default TransactionsNav