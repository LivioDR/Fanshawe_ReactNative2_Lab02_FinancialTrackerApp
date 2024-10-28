import React from "react";
import { View, Text } from "react-native";

const TransactionsList = ({transactions}) => {
    return(
        <View style={{display: 'flex', width: '100%'}}>
            {transactions.map(item => <View key={item.id} style={{display: 'flex', width: '100%',}}><Text>{JSON.stringify(item.desc)}</Text></View>)}
        </View>
    )
}
export default TransactionsList