import React from "react";
import { View, Text } from "react-native";
import styles from "./DetailRowStyles";


const DetailRow = ({label, value}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <Text style={styles.value}>
                {value}
            </Text>
        </View>
    )
}
export default DetailRow