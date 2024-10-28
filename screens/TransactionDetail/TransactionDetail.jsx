import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

const TransactionDetail = () => {

    const route = useRoute()
    const transaction = route.params.data

    console.log(transaction)

    return(
        <View>
            <Text>
                {transaction.desc}
            </Text>
        </View>
    )
}

export default TransactionDetail