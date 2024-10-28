import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import DetailRow from "./DetailRow/DetailRow";
import styles from "./TransactionDetailStyles";


const TransactionDetail = () => {

    const route = useRoute()
    const transaction = route.params.data

    const date = transaction.date.split("T")[0]
    const time = transaction.date.split("T")[1].split(".")[0]

    return(
        <View style={styles.container}>
            <View style={styles.receipt}>
                <DetailRow label={"Description"} value={transaction.desc} />
                <DetailRow label={"Category"} value={transaction.category} />
                <DetailRow label={"Posted on"} value={`${date} @ ${time}`} />
                <DetailRow label={"Amount"} value={`$ ${transaction.amount.toFixed(2)}`} />
                <DetailRow label={"Payment method"} value={transaction.paymentMethod} />
                
                <View style={styles.idContainer}>
                    <Text style={styles.idText}>
                        Transaction ID:
                    </Text>
                    <Text style={styles.idText}>
                        {transaction.id}
                    </Text>
                </View>
            </View>
        </View>
        
    )
}

export default TransactionDetail