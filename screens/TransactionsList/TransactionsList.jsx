import React from "react";
import { View, FlatList } from "react-native";
import TransactionCard from "./TransactionCard/TransactionCard";

const TransactionsList = ({transactions}) => {
    return(
        <View style={{display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column',}}>
            <FlatList
                data={transactions}
                keyExtractor={data => data.id}
                renderItem={data => 
                    <TransactionCard data={data.item} />
                }
            />
        </View>
    )
}
export default TransactionsList